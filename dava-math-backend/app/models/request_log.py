from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.sql import func
from app.database import Base

class RequestLog(Base):
    __tablename__ = "request_logs"
    id = Column(Integer, primary_key=True, index=True)
    path = Column(String, index=True)
    payload = Column(Text)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    user_id = Column(Integer)