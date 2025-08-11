import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, AlertCircle } from "lucide-react"

export const EmailInputField = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
        Email Address
      </Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <Input
          id="email"
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your email"
          className={`pl-10 ${error ? "border-red-500 focus:border-red-500" : ""}`}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}
