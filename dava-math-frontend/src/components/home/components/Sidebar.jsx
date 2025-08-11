import React from "react"

export default function Sidebar({subjects, activeSubject, setActiveSubject}) {
    return (
        <div className="p-4 space-y-3 rounded-lg shadow-sm bg-transparent border border-slate-200">
            <div className="text-lg font-semibold text-slate-700 mb-2">Subjects</div>
            {subjects.map((subject) => (
                <button
                    key={subject.id}
                    onClick={() => setActiveSubject(subject.id)}
                    className={`w-full p-3 rounded-lg text-left flex items-center gap-3 transition ${
                        activeSubject === subject.id
                            ? "bg-orange-50 border-2 border-orange-300"
                            : "bg-white border border-slate-200 hover:bg-slate-50"
                    }`}
                >
                    <span className="text-xl">{subject.icon}</span>
                    <div className="flex flex-col">
                        <span className="text-slate-800 font-medium">{subject.name}</span>
                        {activeSubject === subject.id && (
                            <span className="mt-1 text-xs text-orange-700 bg-orange-100 rounded-full px-2 py-0.5 w-fit">
                                Active
                            </span>
                        )}
                    </div>
                </button>
            ))}
        </div>
    )
}
