from sqlalchemy import Column, Integer, Float, DateTime
from app.config.database import Base
from datetime import datetime

class TambakDipasena(Base):
    __tablename__ = "tambak_dipasena"

    id = Column(Integer, primary_key=True, index=True)
    time = Column(DateTime, default=datetime.utcnow)

    suhu_air_permukaan = Column(Float)
    suhu_air_dasar = Column(Float)
    suhu_ruang = Column(Float)
    salinitas = Column(Float)
    oxygen = Column(Float)
    ph = Column(Float)
    amonia = Column(Float)
