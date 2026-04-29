// app/perfil/[id]/page.tsx
"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import GetPerfil from "@/api/getPerfil"
import Seguir from "@/api/seguir"
import Postesito from "@/app/components/postesito"
import { Post } from "@/app/types"

type Usuario = {
    _id: string
    username: string
    bio: string
    seguidores: string[]
    seguidos: string[]
}

type PerfilData = {
    user: Usuario
    posts: Post[]
}

const PaginaPerfil = () => {
    const { id } = useParams()
    const router = useRouter()
    const [perfil, setPerfil] = useState<PerfilData | null>(null)

    const cargarPerfil = () => {
        GetPerfil(id as string).then((res) => {
            setPerfil(res)
        })
    }

    useEffect(() => {
        cargarPerfil()
    }, [])

    const handleSeguir = async () => {
        await Seguir(id as string)
        cargarPerfil()
    }

    if (!perfil) return <p>Cargando...</p>

    return (
        <div>
            <button onClick={() => router.push("/principal")}>Home</button>
            <div>
                <h1>{perfil.user.username}</h1>
                <p>{perfil.user.bio}</p>
                <div>
                    <span>Seguidores: {perfil.user.seguidores.length}</span>
                    <span>Seguidos: {perfil.user.seguidos.length}</span>
                </div>
                <button onClick={handleSeguir}>Seguir / Dejar de seguir</button>
            </div>
            <div>
                <h2>Posts</h2>
                {perfil.posts && perfil.posts.map((p) => (
                    <Postesito key={p._id} post={p} onRefresh={cargarPerfil}></Postesito>
                ))}
            </div>
        </div>
    )
}

export default PaginaPerfil;