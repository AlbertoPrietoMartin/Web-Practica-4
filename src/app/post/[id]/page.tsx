"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import GetPost from "@/api/getPost"
import Comentar from "@/api/comentar"
import DarLike from "@/api/like"
import DarRetweet from "@/api/retweet"
import { Post } from "@/app/types"

const PaginaPost = () => {
    const { id } = useParams()
    const router = useRouter()
    const [post, setPost] = useState<Post | null>(null)
    const [comentario, setComentario] = useState<string>("")

    const cargarPost = () => {
        GetPost(id as string).then((res) => {
            setPost(res)
        })
    }

    useEffect(() => {
        cargarPost()
    }, [])

    const handleLike = async () => {
        await DarLike(id as string)
        cargarPost()
    }

    const handleRetweet = async () => {
        await DarRetweet(id as string)
        cargarPost()
    }

    const handleComentar = async () => {
        if (!comentario.trim()) return
        console.log("ID DEL POST:", id)
        console.log("COMENTARIO:", comentario)
        await Comentar(id as string, comentario)
        setComentario("")
        cargarPost()
    }

    if (!post) return <p className="contenedor">Cargando...</p>

    return (
        <div className="contenedor">
            <div className="post-detalle">
                <h2 onClick={() => router.push(`/perfil/${post.autor._id}`)}>{post.autor.username}</h2>
                <p>{post.contenido}</p>
                <span className="post-fecha">{new Date(post.createdAt).toLocaleDateString()}</span>
                <div className="post-acciones">
                    <button onClick={handleLike}>❤️ {post.likes.length}</button>
                    <button onClick={handleRetweet}>🔁 {post.retweets.length}</button>
                </div>
            </div>
            <div>
                <h3 className="comentarios-titulo">Comentarios</h3>
                {post.comentarios.map((c) => (
                    <div key={c._id} className="comentario">
                        <strong>{c.autor.username}</strong>
                        <p>{c.contenido}</p>
                        <span>{new Date(c.fecha).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
            <div className="form-comentario">
                <textarea
                    placeholder="Escribe un comentario..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                <button onClick={handleComentar}>Comentar</button>
            </div>
        </div>
    )
}

export default PaginaPost;