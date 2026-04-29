// api/getPerfil.ts
import api from "./api"

const GetPerfil = async (userId: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.get(`/api/users/${userId}/profile`, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default GetPerfil;