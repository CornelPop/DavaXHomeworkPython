from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.math import MathRequest, MathResponse
from app.services.math_service import MathService
from app.dependencies.db import get_db
from app.dependencies.auth import get_current_user
from app.repositories.request_log_repository import RequestLogRepository
import json

router = APIRouter(prefix="/math", tags=["math"])
service = MathService()

@router.post("/pow", response_model=MathResponse)
def compute_pow(req: MathRequest, db: Session = Depends(get_db), user=Depends(get_current_user)):
    result = service.pow(req.x, req.y or 0)
    RequestLogRepository(db).create(path="/math/pow", payload=json.dumps(req.dict()), user_id=user.id)
    return {"result": result}

@router.get("/fib/{n}", response_model=MathResponse)
def get_fib(n: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    result = service.fib(n)
    RequestLogRepository(db).create(path=f"/math/fib/{n}", payload="", user_id=user.id)
    return {"result": result}

@router.get("/fact/{n}", response_model=MathResponse)
def get_fact(n: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    result = service.factorial(n)
    RequestLogRepository(db).create(path=f"/math/fact/{n}", payload="", user_id=user.id)
    return {"result": result}