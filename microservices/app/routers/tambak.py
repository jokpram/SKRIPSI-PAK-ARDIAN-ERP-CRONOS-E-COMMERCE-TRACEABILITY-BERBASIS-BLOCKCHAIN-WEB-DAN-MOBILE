from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import SessionLocal
from app.services.tambak_service import TambakService

router = APIRouter(prefix="/tambak", tags=["Tambak"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    return TambakService.get_all(db)

@router.get("/latest")
def get_latest(db: Session = Depends(get_db)):
    return TambakService.get_latest(db)

@router.get("/notifications")
def get_notifications(db: Session = Depends(get_db)):
    return TambakService.get_notifications(db)
