import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthLayout } from "@/components/ui/auth-layout"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom";
import { EmailInputField } from "../common/email-input-field"
import { PasswordInputField } from "../common/password-input-field"
import { ForgotPasswordLink } from "./components/forgot-password-link"
import { SubmitButton } from "../common/submit-button"
import { Divider } from "../common/divider"
import { RegisterLinkButton } from "./components/register-link-button"
import { useNavigate } from "react-router-dom"


export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const navigate = useNavigate();
    const validateForm = () => {
        const newErrors = {}
        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }
        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            localStorage.setItem("token", data.access_token);
            console.log("Login successful:", localStorage.getItem("token"));

            setLoginSuccess(true);
            navigate("/");
        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setIsLoading(false);
        }
    };
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    return (
        <AuthLayout title="Welcome Back" subtitle="Sign in to your account to continue">
            <Card className="shadow-lg">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg">
                    <CardHeader className="p-4">
                        <CardTitle className="text-center">Sign In</CardTitle>
                    </CardHeader>
                </div>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {errors.general && (
                            <p className="text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.general}
                            </p>
                        )}
                        {/* Email Field */}
                        <EmailInputField
                            value={formData.email}
                            onChange={(val) => handleInputChange("email", val)}
                            error={errors.email}
                        />
                        {/* Password Field */}
                        <PasswordInputField
                            value={formData.password}
                            onChange={(val) => handleInputChange("password", val)}
                            error={errors.password}
                            showPassword={showPassword}
                            toggleVisibility={() => setShowPassword((prev) => !prev)}   ></PasswordInputField>
                        {/* Forgot Password Link */}
                        <ForgotPasswordLink />
                        {/* Submit Button */}
                        <SubmitButton isLoading={isLoading} />
                    </form>
                    {/* Divider */}
                    <Divider />
                    {/* Register Link */}
                    <RegisterLinkButton />
                </CardContent>
            </Card>
        </AuthLayout>
    )
}