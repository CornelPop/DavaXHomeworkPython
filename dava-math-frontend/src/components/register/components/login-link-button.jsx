import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import React from "react"

export const LoginLinkButton = () => {
    return (
        <div className="mt-4 text-center">
            <Link to="/login">
                <Button variant="outline" className="w-full bg-transparent">
                    Sign In Instead
                </Button>
            </Link>
        </div>
    )
}