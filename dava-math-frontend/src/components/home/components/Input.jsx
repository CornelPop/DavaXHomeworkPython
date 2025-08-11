import React from "react"

const Input = ({
                   count = 1,
                   labels = ["Enter value:"],
                   values = [""],
                   onChanges = [() => {}],
                   placeholders = [""],
                   ids = ["input-1"],
               }) => {
    const inputCount = count === 2 ? 2 : 1

    return (
        <div className="space-y-4">
            {Array.from({ length: inputCount }).map((_, index) => (
                <div key={index} className="space-y-1">
                    <label htmlFor={ids[index] || `input-${index}`} className="block font-semibold text-slate-700">
                        {labels[index] || `Value ${index + 1}`}
                    </label>
                    <input
                        id={ids[index] || `input-${index}`}
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        placeholder={placeholders[index] || ""}
                        value={values[index] || ""}
                        onChange={onChanges[index]}
                    />
                </div>
            ))}
        </div>
    )
}

export default Input
