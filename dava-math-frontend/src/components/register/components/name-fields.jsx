import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, AlertCircle } from "lucide-react"
import React from "react"

export const NameFields = ({ firstName, lastName, errors, onChange }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                    First Name
                </Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => onChange("firstName", e.target.value)}
                        placeholder="John"
                        className={`pl-10 ${errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                </div>
                {errors.firstName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName}
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                    Last Name
                </Label>
                <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => onChange("lastName", e.target.value)}
                    placeholder="Doe"
                    className={errors.lastName ? "border-red-500 focus:border-red-500" : ""}
                />
                {errors.lastName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName}
                    </p>
                )}
            </div>
        </div>
    )
}