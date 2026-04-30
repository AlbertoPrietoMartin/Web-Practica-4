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
        <div className="login-wrapper">
            <div className="login-card">
            <h1>NebrijaSocial</h1>


            <div className="login-tabs">
                <button className={iniciarSesion ? "activo" : ""} onClick={()=>setiniciarSesion(true)}> Iniciar Sesion</button>
                <button className={!iniciarSesion ? "activo" : ""} onClick={()=>{setiniciarSesion(false); console.log("boton iniciar sesion")}}> Crear Cuenta</button>
                <div>
                    {iniciarSesion && (
                        <div>
                        <div className="login-campo"><p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input></div>
                        <div className="login-campo"><p>Contraseña</p>
                        <input placeholder="******" onChange={(e) => setPassword(e.target.value)}></input></div>
                        <button className="btn-submit" onClick={async () => {
                        
                        
                        console.log("CLICK LOGIN");

                    try {
                        const res = await Login(email, password);
                        console.log("RESPUESTA:", res);

                        const token = res.token;
                        const userId = res.user._id;

                        document.cookie = `token=${token}; path=/`;

                        document.cookie = `userId=${userId}; path=/`;


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
                        <div className="login-campo"><p>Username</p>    
                        <input placeholder="tu_usuario" onChange={(e) => setUsername(e.target.value)}></input></div>
                        <div className="login-campo"><p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input></div>
                        <div className="login-campo"><p>Contraseña</p>
                        <input placeholder="*****" onChange={(e) => setPassword(e.target.value)}></input></div>
                        <button className="btn-submit" onClick={()=>{
                            
                            Register(username,email,password).then((res)=>{
                                if(!res) {
                                    console.log("REFISTER FALLO");
                                    return;
                                }
                                  console.log("CLICK EN CREAR CUENTA");

                                console.log("CLICK EN CREAR CUENTA");
                                const token = res.token;
                                const userId = res.user._id;
                                document.cookie = `token=${token}; path=/`;
                                document.cookie = `userId=${userId}; path=/`;
                                router.push("/principal");
                            })
                        }}>Crear Cuenta</button>
                     </div>
                )}
                </div>
                
            </div>
            </div>
        </div>  
    )
}
export default PaginaIdentificacion;