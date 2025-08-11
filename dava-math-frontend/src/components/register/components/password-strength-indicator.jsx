import React from "react"

export const PasswordStrengthIndicator = ({ strength }) => {
    return (
        <div className="space-y-1">
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                    <div
                        key={level}
                        className={`h-1 flex-1 rounded ${strength >= level
                                ? strength <= 2
                                    ? "bg-red-500"
                                    : strength <= 3
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                : "bg-slate-200"
                            }`}
                    />
                ))}
            </div>
            <p className="text-xs text-slate-600">
                Password strength: {strength <= 2 ? "Weak" : strength <= 3 ? "Medium" : "Strong"}
            </p>
        </div>
    )
}