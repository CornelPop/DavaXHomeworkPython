const API_BASE = "http://localhost:8000"

export async function calculatePower(token, x, y) {
    const res = await fetch(`${API_BASE}/math/pow`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ x, y }),
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || "Power calculation failed")
    return data.result
}

export async function getFibonacci(token, n) {
    const res = await fetch(`${API_BASE}/math/fib/${n}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || "Fibonacci calculation failed")
    return data.result
}

export async function getFactorial(token, n) {
    const res = await fetch(`${API_BASE}/math/fact/${n}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || "Factorial calculation failed")
    return data.result
}
