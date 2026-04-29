import { Post } from "@/app/types"

const Postesito = ({post}: {post: Post}) => {
    return (
        <div>
            <h2>{post.autor.username}</h2>
            <p>{post.contenido}</p>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <div>
                <button>❤️ {post.likes.length}</button>
                <button>🔁 {post.retweets.length}</button>
            </div>
        </div>
    )
}

export default Postesito;