import api from "./api"

const GetPost = async (id: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.get(`/api/posts/${id}`, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default GetPost;