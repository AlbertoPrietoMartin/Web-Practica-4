import api from "./api"

const DarLike = async (postId: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.post(`/api/posts/${postId}/like`, {}, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default DarLike;