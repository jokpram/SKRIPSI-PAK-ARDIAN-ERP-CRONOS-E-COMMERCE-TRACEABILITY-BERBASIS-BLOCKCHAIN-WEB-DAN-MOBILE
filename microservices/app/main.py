from fastapi import FastAPI
from app.config.database import engine, Base
from app.routers import tambak
from app.mqtt_client import start_mqtt

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FastAPI MQTT Tambak Dipasena")

app.include_router(tambak.router)

@app.on_event("startup")
def startup():
    start_mqtt()
