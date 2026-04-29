"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Register from "@/api/register"
import Login from "@/api/login"


const PaginaIdentificacion = () =>{
    const router = useRouter();
    const [iniciarSesion, setiniciarSesion] = useState<boolean>(true)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")    

    return(
        <div>
            <h1>NebrijaSocial</h1>


            <div>
                <button onClick={()=>setiniciarSesion(true)}> Iniciar Sesion</button>
                <button onClick={()=>{setiniciarSesion(false); console.log("boton iniciar sesion")}}> Crear Cuenta</button>
                <div>
                    {iniciarSesion && (
                        <div>
                        <p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Contraseña</p>
                        <input placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
                        <button onClick={async () => {
                        
                        
                        console.log("CLICK LOGIN");

                    try {
                        const res = await Login(email, password);
                        console.log("RESPUESTA:", res);

                        const token = res.token;

                        document.cookie = `token=${token}; path=/`;

                        console.log("COOKIE:", document.cookie);

                        console.log("EMAIL:", email);
                        console.log("PASSWORD:", password);

                        router.push("/principal");
                    } catch (e) {
                        console.error("ERROR:", e);
                    }
                }}>
                Iniciar Sesion
                </button>
                     </div>
                     
                )}
                    {!iniciarSesion && (
                        <div>
                        <p>Username</p>    
                        <input placeholder="tu_usuario" onChange={(e) => setUsername(e.target.value)}></input>
                        <p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Contraseña</p>
                        <input placeholder="*****" onChange={(e) => setPassword(e.target.value)}></input>
                        <button onClick={()=>{
                            
                            Register(username,email,password).then((res)=>{
                                if(!res) {
                                    console.log("REFISTER FALLO");
                                    return;
                                }
                                  console.log("CLICK EN CREAR CUENTA");

                                const token = res.token
                                document.cookie = `token=${token}; path=/`;
                                router.push("/principal")
                            })
                        }}>Crear Cuenta</button>
                     </div>
                )}
                </div>
                
            </div>
        </div>  
    )
}
export default PaginaIdentificacion;