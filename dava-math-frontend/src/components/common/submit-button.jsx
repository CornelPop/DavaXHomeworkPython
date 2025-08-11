import { Button } from "@/components/ui/button"
import React from "react"

export const SubmitButton = ({ isLoading }) => {
    return (
        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 py-2.5" disabled={isLoading}>
            {isLoading ? (
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing In...
                </div>
            ) : (
                "Sign In"
            )}
        </Button>
    )
}