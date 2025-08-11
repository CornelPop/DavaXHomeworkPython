import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "DavaMath REST API"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "codex-is-the-best-team")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    SQLALCHEMY_DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./production.db")
    KAFKA_BROKER: str = os.getenv("KAFKA_BROKER", "localhost:9092")
    REQUEST_LOG_TOPIC: str = os.getenv("REQUEST_LOG_TOPIC", "request_logs")
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")

    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()