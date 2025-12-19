from sqlalchemy.orm import Session
from app.models.tambak import TambakDipasena

class TambakService:

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(TambakDipasena)
            .order_by(TambakDipasena.time.desc())
            .limit(100)
            .all()
        )

    @staticmethod
    def get_latest(db: Session):
        return (
            db.query(TambakDipasena)
            .order_by(TambakDipasena.time.desc())
            .first()
        )

    @staticmethod
    def get_notifications(db: Session):
        return (
            db.query(TambakDipasena)
            .filter(
                (TambakDipasena.suhu_air_permukaan > 32) | (TambakDipasena.suhu_air_permukaan < 28) |
                (TambakDipasena.suhu_air_dasar > 32) | (TambakDipasena.suhu_air_dasar < 28) |
                (TambakDipasena.suhu_ruang > 30) | (TambakDipasena.suhu_ruang < 25) |
                (TambakDipasena.salinitas > 25) | (TambakDipasena.salinitas < 15) |
                (TambakDipasena.oxygen < 4) | (TambakDipasena.oxygen > 8) |
                (TambakDipasena.ph < 7.5) | (TambakDipasena.ph > 8.5) |
                (TambakDipasena.amonia > 0.5)
            )
            .order_by(TambakDipasena.time.desc())
            .limit(10)
            .all()
        )

    @staticmethod
    def insert(db: Session, data: dict):
        tambak = TambakDipasena(**data)
        db.add(tambak)
        db.commit()
        db.refresh(tambak)
        return tambak
