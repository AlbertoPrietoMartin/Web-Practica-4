import api from "./api"

const Comentar = async (postId: string, contenido: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.post(`/api/posts/${postId}/comment`, {
        contenido
    }, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default Comentar;