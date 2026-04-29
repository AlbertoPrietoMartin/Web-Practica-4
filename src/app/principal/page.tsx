"use client"

import { useEffect, useState } from "react";
import Home from "@/api/home";
import { Post } from "../types";
import Postesito from "../components/postesito";

const principal = () =>{
    const [posts, setPosts] = useState<Post[] | null>(null)
    const [error, setError] = useState<string>("")

    useEffect(()=>{
        Home().then((res)=>{
            setPosts(res)
        }).catch((e)=>{
            setError(e)
        })
    }, [])

    return (
        <div>
            {posts && posts.map((e) => {
                return <Postesito key={e._id} post={e}></Postesito>
            })}

            
        </div>
    )
}

export default principal;