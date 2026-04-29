import api from "./api";

const Home = async () => {
    const token = document.cookie
        .split("; ")
        .find(r => r.startsWith("token="))
        ?.split("=")[1];

    const respuesta = await api.get("/api/home", {
        headers: {
            "x-nombre": "Alberto",
            "Authorization": `Bearer ${token}`
        }
    });
    return respuesta.data.posts;
}

export default Home;