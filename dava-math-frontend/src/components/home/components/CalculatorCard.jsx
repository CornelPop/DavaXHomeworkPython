import React, { useState } from "react"
import Input from "./Input"
import { Trash2 } from "lucide-react"
import {
    calculatePower,
    getFibonacci,
    getFactorial,
} from "../../../services/mathOperationsService"

export default function CalculatorCard({ subject }) {
    const [expression, setExpression] = useState("")
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const token = localStorage.getItem("token")

    const handleCalculate = async () => {
        setError("")
        setResult("")
        setLoading(true)

        try {
            if (!token) throw new Error("Missing authentication token.")

            if (subject.name === "Pow Function") {
                const base = parseFloat(value1)
                const exponent = parseFloat(value2)
                if (isNaN(base) || isNaN(exponent)) {
                    throw new Error("Both base and exponent must be numbers.")
                }
                const res = await calculatePower(token, base, exponent)
                setResult(res)
            } else if (subject.name === "The n-th Fibbonaci") {
                const n = parseInt(expression)
                if (isNaN(n)) throw new Error("Please enter a valid integer.")
                const res = await getFibonacci(token, n)
                setResult(res)
            } else if (subject.name === "Factorial of Number") {
                const n = parseInt(expression)
                if (isNaN(n)) throw new Error("Please enter a valid integer.")
                const res = await getFactorial(token, n)
                setResult(res)
            } else {
                throw new Error("Unknown subject.")
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleClear = () => {
        setExpression("")
        setValue1("")
        setValue2("")
        setResult("")
        setError("")
    }

    return (
        <div className="shadow-lg border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white p-4 text-lg font-semibold flex items-center gap-2">
                <span className="text-2xl">{subject.icon}</span>
                {subject.name}
            </div>

            <div className="p-6 space-y-6">
                <div className="space-y-3">
                    {subject.name === "Pow Function" ? (
                        <Input
                            count={2}
                            labels={["Enter base:", "Enter exponent:"]}
                            values={[value1, value2]}
                            onChanges={[
                                (e) => setValue1(e.target.value),
                                (e) => setValue2(e.target.value),
                            ]}
                            placeholders={["e.g., 2", "e.g., 3"]}
                        />
                    ) : (
                        <Input
                            count={1}
                            labels={["Enter your number:"]}
                            values={[expression]}
                            onChanges={[(e) => setExpression(e.target.value)]}
                            placeholders={["e.g., 10"]}
                        />
                    )}
                </div>

                {error && (
                    <p className="text-red-600 text-sm font-medium">Error: {error}</p>
                )}

                <button
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition disabled:opacity-60"
                    onClick={handleCalculate}
                    disabled={loading}
                >
                    {loading ? "Calculating..." : "Calculate Result"}
                </button>

                <div>
                    <div className="font-semibold">Your Answer</div>
                    <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 text-slate-700 mt-2 min-h-[2rem]">
                        {loading
                            ? "Loading..."
                            : result || "Your calculated result will appear here"}
                    </div>
                </div>

                <button
                    className="w-full border border-slate-300 py-2 rounded-lg flex items-center justify-center gap-2 text-slate-700 hover:bg-slate-100 transition"
                    onClick={handleClear}
                >
                    <Trash2 className="w-4 h-4" />
                    Clear All
                </button>
            </div>
        </div>
    )
}
