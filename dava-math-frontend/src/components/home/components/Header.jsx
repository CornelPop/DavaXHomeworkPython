import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-600 rounded-lg" />
                    <h1 className="text-3xl font-bold text-slate-800">Dava Math</h1>
                </div>
                <p className="text-slate-600">
                    Solve mathematical problems with ease and precision
                </p>
            </div>

            <Button variant="outline" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
