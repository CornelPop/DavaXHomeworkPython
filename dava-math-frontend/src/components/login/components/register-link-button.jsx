import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import React from "react"

export const RegisterLinkButton = () => {
    return (
        <div className="mt-4 text-center">
            <Link to="/register">
                <Button variant="outline" className="w-full bg-orange-600 text-white hover:bg-orange-700">
                    Create New Account
                </Button>
            </Link>
        </div>
    )
}