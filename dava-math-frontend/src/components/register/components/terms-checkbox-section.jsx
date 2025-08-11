import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"
import React from "react"

export const TermsCheckboxSection = ({ checked, onChange, error }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <Checkbox
          id="agreeToTerms"
          checked={checked}
          onCheckedChange={onChange}
          className={error ? "border-red-500" : ""}
        />
        <Label htmlFor="agreeToTerms" className="text-sm text-slate-700 leading-5">
          I agree to the{" "}
          <Link to="/terms" className="text-orange-600 hover:text-orange-800">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-orange-600 hover:text-orange-800">
            Privacy Policy
          </Link>
        </Label>
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