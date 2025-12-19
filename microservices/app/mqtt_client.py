import json
import os
import threading
import time
import paho.mqtt.client as mqtt
from datetime import datetime
from dotenv import load_dotenv

from app.config.database import SessionLocal
from app.services.tambak_service import TambakService

load_dotenv()

MQTT_HOST = os.getenv("MQTT_HOST")
MQTT_PORT = int(os.getenv("MQTT_PORT"))
MQTT_TOPIC = os.getenv("MQTT_TOPIC")

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("MQTT connected")
        client.subscribe(MQTT_TOPIC)
    else:
        print("MQTT connection failed:", rc)

def on_message(client, userdata, msg):
    try:
        payload = json.loads(msg.payload.decode())
        data = {
            "time": datetime.fromisoformat(payload["time"]),
            "suhu_air_permukaan": payload["suhu_air_permukaan"],
            "suhu_air_dasar": payload["suhu_air_dasar"],
            "suhu_ruang": payload["suhu_ruang"],
            "salinitas": payload["salinitas"],
            "oxygen": payload["oxygen"],
            "ph": payload["ph"],
            "amonia": payload["amonia"],
        }

        db = SessionLocal()
        TambakService.insert(db, data)
        db.close()

        print("MQTT data saved")

    except Exception as e:
        print("MQTT error:", e)

def mqtt_loop():
    while True:
        try:
            client = mqtt.Client()
            client.on_connect = on_connect
            client.on_message = on_message

            client.connect(MQTT_HOST, MQTT_PORT, keepalive=60)
            client.loop_forever()

        except Exception as e:
            print("MQTT reconnect in 5s:", e)
            time.sleep(5)

def start_mqtt():
    thread = threading.Thread(target=mqtt_loop, daemon=True)
    thread.start()
