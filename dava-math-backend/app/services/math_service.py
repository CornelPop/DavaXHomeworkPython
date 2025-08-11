import math
from functools import lru_cache

class MathService:
    def pow(self, x: int, y: int) -> float:
        return math.pow(x, y)

    @lru_cache(maxsize=128)
    def fib(self, n: int) -> int:
        if n < 0:
            raise ValueError("n must be a non-negative integer")
        a, b = 0, 1
        for _ in range(n):
            a, b = b, a + b
        return a

    @lru_cache(maxsize=128)
    def factorial(self, n: int) -> int:
        if n < 0:
            raise ValueError("n must be a non-negative integer")
        return math.factorial(n)