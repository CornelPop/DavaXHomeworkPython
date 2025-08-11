// File: components/login/LoginDivider.jsx
import React from "react"

export const Divider = () => {
    return (
        <div className="mt-6 text-center">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">Don't have an account?</span>
                </div>
            </div>
        </div>
    )
}
