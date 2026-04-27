import { Post } from "@/app/types"

const Postesito = ({post}: {post : Post}) =>{

    return(
        <div>
            <h1>{post.autor.username}</h1>  
        </div>
    )
}

export default Postesito;