"use client"
import { useEffect, useState } from "react";
import Home from "@/api/home";
import CrearPost from "@/api/post";
import { Post } from "../types";
import Postesito from "../components/postesito";

const Principal = () => {
    const [posts, setPosts] = useState<Post[] | null>(null)
    const [contenido, setContenido] = useState<string>("")
    const [pagina, setPagina] = useState<number>(1)
    const [totalPaginas, setTotalPaginas] = useState<number>(1)

    const cargarPosts = (pag: number) => {
        Home(pag).then((res) => {
            console.log("HOME RES:", res)
            setPosts(res.posts)
            setTotalPaginas(res.totalPaginas)   
        })
    }

    useEffect(() => {
        cargarPosts(pagina)
    }, [pagina])

    const handlePost = async () => {
        if (!contenido.trim()) return
        await CrearPost(contenido)
        setContenido("")
        cargarPosts(pagina)
    }

    return (
        <div>
            <div>
                <textarea
                    placeholder="Qué está pasando?"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                ></textarea>
                <button onClick={handlePost}>Postear</button>
            </div>
            {posts && posts.map((e) => (
                <Postesito key={e._id} post={e} onRefresh={() => cargarPosts(pagina)}></Postesito>
            ))}
            <div>
                <button onClick={() => setPagina(p => p - 1)} disabled={pagina === 1}>← Anterior</button>
                <span>Página {pagina} de {totalPaginas}</span>
                <button onClick={() => setPagina(p => p + 1)} disabled={pagina === totalPaginas}>Siguiente →</button>
            </div>
        </div>
    )
}

export default Principal;