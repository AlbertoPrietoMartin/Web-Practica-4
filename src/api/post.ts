import api from "./api"

const CrearPost = async (contenido: string) => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.post("/api/posts", {
        contenido
    }, {
        headers: {
            "x-nombre": "albertoprieto",
            "Authorization": `Bearer ${token}`
        }
    })
    return respuesta.data;
}

export default CrearPost;