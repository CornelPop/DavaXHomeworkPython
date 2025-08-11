from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserResponse
from app.schemas.auth import Token
from app.services.auth_service import AuthService
from app.repositories.user_repository import UserRepository
from app.dependencies.db import get_db

router = APIRouter(prefix="/auth", tags=["auth"])
service = AuthService()

@router.post("/register", response_model=UserResponse)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    repo = UserRepository(db)
    if repo.get_by_email(user_in.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = service.get_password_hash(user_in.password)
    user = repo.create(email=user_in.email, hashed_password=hashed)
    return user

@router.post("/login", response_model=Token)
def login(credentials: UserCreate, db: Session = Depends(get_db)):
    user = UserRepository(db).get_by_email(credentials.email)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    service.authenticate(user, credentials.password)
    token = service.create_access_token(subject=user.email)
    return {"access_token": token}