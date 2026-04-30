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
        <div className="post">
            <h2 className="post-autor" onClick={handleAutor}>
                {post.autor.username}
            </h2>
            <div onClick={handlePost}>
                <p className="post-contenido">{post.contenido}</p>
                <span className="post-fecha">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="post-acciones">
                <button onClick={handleLike}>❤️ {post.likes.length}</button>
                <button onClick={handleRetweet}>🔁 {post.retweets.length}</button>
            </div>
        </div>
    )
}

export default Postesito;