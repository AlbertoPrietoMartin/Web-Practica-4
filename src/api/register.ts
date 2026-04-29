import api from "./api";

const Register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const respuesta = await api.post(
      "/api/auth/register",
      {
        username,
        email,
        password,
      },
      {
        headers: {
          "x-nombre": "albertoprieto",
        },
      }
    );

    return respuesta.data;
  } catch (e: any) {
    
  console.log("STATUS:", e.response?.status);
  console.log("DATA:", e.response?.data);
  console.log("FULL:", e);

  return null;
}
};

export default Register;