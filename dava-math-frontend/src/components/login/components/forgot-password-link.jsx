import { Link } from "react-router-dom";

export const ForgotPasswordLink = () => {
    return (
        <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-800">
                Forgot your password?
            </Link>
        </div>
    )
}