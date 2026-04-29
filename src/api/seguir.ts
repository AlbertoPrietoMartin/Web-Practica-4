import api from "./api"

const Seguir = async (userId: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.post(`/api/users/${userId}/follow`, {}, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default Seguir;