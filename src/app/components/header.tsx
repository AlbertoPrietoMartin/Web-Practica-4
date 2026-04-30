"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
    const router = useRouter()
    const [miId, setMiId] = useState<string>("")

    useEffect(() => {
        const id = document.cookie
            .split("; ")
            .find(r => r.startsWith("userId="))
            ?.split("=")[1];
        if (id) setMiId(id)
    }, [])

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        router.push("/login")
    }

    return (
        <div className="header">
            <h1>NebrijaSocial</h1>
            <nav>
                <button onClick={() => router.push("/principal")}>🏠 Home</button>
                <button onClick={() => router.push(`/perfil/${miId}`)}>👤 Mi Perfil</button>
                <button onClick={handleLogout}>🚪 Salir</button>
            </nav>
        </div>
    )
}

export default Header;