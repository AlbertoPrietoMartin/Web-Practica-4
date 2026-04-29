import api from "./api"

const Login = async (email: string, password: string) => {
    try {
        const respuesta = await api.post("/api/auth/login", {
            email,
            password
        }, {
            headers: {
                "x-nombre": "albertoprieto",
                "Content-Type": "application/json"
            }
        })
        return respuesta.data;
    } catch (e: any) {
        console.log("STATUS:", e.response?.status);
        console.log("DATA:", e.response?.data);
        console.log("MESSAGE:", e.response?.data?.message);
        throw e;
    }
}

export default Login;