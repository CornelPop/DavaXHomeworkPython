from sqlalchemy.orm import Session
from app.models.request_log import RequestLog

class RequestLogRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, path: str, payload: str, user_id: int) -> RequestLog:
        log = RequestLog(path=path, payload=payload, user_id=user_id)
        self.db.add(log)
        self.db.commit()
        self.db.refresh(log)
        return log