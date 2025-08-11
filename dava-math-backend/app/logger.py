from app.config import settings
from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=settings.KAFKA_BROKER,
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

def log_request(path: str, payload: dict, user_id: int):
    message = {"path": path, "payload": payload, "user_id": user_id}
    producer.send(settings.REQUEST_LOG_TOPIC, message)
    producer.flush()