// app/components/postesito.tsx
import { Post } from "@/app/types"
import DarLike from "@/api/like"
import DarRetweet from "@/api/retweet"
import { useRouter } from "next/navigation"

const Postesito = ({post, onRefresh}: {post: Post, onRefresh: () => void}) => {
    const router = useRouter()

    const handleLike = async (e: React.MouseEvent) => {
        e.stopPropagation()
        await DarLike(post._id)
        onRefresh()
    }

    const handleRetweet = async (e: React.MouseEvent) => {
        e.stopPropagation()
        await DarRetweet(post._id)
        onRefresh()
    }

    const handleAutor = (e: React.MouseEvent) => {
        e.stopPropagation()
        router.push(`/perfil/${post.autor._id}`)
    }

    const handlePost = () => {
        router.push(`/post/${post._id}`)
    }

    return (
        <div>
            <h2 onClick={handleAutor} style={{cursor: "pointer"}}>
                {post.autor.username}
            </h2>
            <div onClick={handlePost} style={{cursor: "pointer"}}>
                <p>{post.contenido}</p>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
                <button onClick={handleLike}>❤️ {post.likes.length}</button>
                <button onClick={handleRetweet}>🔁 {post.retweets.length}</button>
            </div>
        </div>
    )
}

export default Postesito;