from pydantic import BaseModel
from typing import Optional, Any

class MathRequest(BaseModel):
    x: int
    y: Optional[int] = None  # only for pow

class MathResponse(BaseModel):
    result: Any

    model_config = {"from_attributes": True}