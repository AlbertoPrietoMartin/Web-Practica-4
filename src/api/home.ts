import api from "./api";

const Home = async() =>{
    const respuesta = await api.get("/api/home")
    return respuesta.data.posts;
}

export default Home;