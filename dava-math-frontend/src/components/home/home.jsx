import React, { useState } from "react"
import CalculatorCard from "./components/CalculatorCard"
import QuickTips from "./components/QuickTips"
import Sidebar from "./components/Sidebar"
import AppHeader from "./components/Header.jsx"


export default function Home() {
    const [activeSubject, setActiveSubject] = useState("matematica-1")

    const subjects = [
        { id: "matematica-1", name: "Pow Function", icon: "📐" },
        { id: "matematica-2", name: "The n-th Fibbonaci", icon: "📊" },
        { id: "matematica-3", name: "Factorial of Number", icon: "∫" },
    ]

    const currentSubject = subjects.find((s) => s.id === activeSubject)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
            <div className="max-w-6xl mx-auto">
                <AppHeader />
                <div className="grid lg:grid-cols-4 gap-6">
                    <Sidebar
                        subjects={subjects}
                        activeSubject={activeSubject}
                        setActiveSubject={setActiveSubject}
                    />
                    <div className="lg:col-span-3 space-y-6">
                        <CalculatorCard subject={currentSubject} />
                        <QuickTips />
                    </div>
                </div>
            </div>
        </div>
    )
}
