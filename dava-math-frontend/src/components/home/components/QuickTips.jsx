import React from "react"

export default function QuickTips() {
    return (
        <div className="border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                <span>💡</span>
                Quick Tips
            </h3>
            <ul className="text-sm text-orange-700 list-disc list-inside space-y-1">
                <li>Use parentheses to control order of operations</li>
                <li>Press Enter in the input field to calculate</li>
                <li>Switch subjects from the sidebar</li>
                <li>Clear resets both input and output</li>
            </ul>
        </div>
    )
}
