import api from "./api"

const Login = async( email:string, password: string) =>{

    const toke = document.cookie
    const respuesta = await api.post("/api/auth/login", {
        email,
        password
    }, {
        headers:{
            "x-nombre": "Alberto",
            
        }
    })
    return respuesta.data;
}

export default Login;