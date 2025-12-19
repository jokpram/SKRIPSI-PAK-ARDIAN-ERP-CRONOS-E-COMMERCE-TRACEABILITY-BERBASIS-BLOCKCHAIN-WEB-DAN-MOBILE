from pydantic import BaseModel
from datetime import datetime

class TambakBase(BaseModel):
    suhu_air_permukaan: float
    suhu_air_dasar: float
    suhu_ruang: float
    salinitas: float
    oxygen: float
    ph: float
    amonia: float

class TambakCreate(TambakBase):
    time: datetime

class TambakResponse(TambakCreate):
    id: int

    class Config:
        from_attributes = True
