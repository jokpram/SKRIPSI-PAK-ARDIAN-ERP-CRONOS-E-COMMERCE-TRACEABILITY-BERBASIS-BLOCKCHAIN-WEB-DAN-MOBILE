# CRONOS  
## Crustacean Origin Network Oversight System

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=jokpram&repo=SKRIPSI-PAK-ARDIAN-ERP-CRONOS-E-COMMERCE-TRACEABILITY-BERBASIS-BLOCKCHAIN-WEB-DAN-MOBILE&label=Repository+Views&color=0A66C2&style=flat" alt="Repository View Counter" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=36&duration=4000&pause=2000&color=FFFFFF&center=true&vCenter=true&width=800&height=60&lines=CRONOS" alt="CRONOS Title" />
</p>

<p align="center">
  <strong>End-to-End Shrimp Traceability, Monitoring, and E-Commerce System</strong>
</p>

<p align="center">
  Academic Project – ERP, Traceability, Blockchain Concept, Web and Mobile Platform
</p>

---

## Project Overview

CRONOS (Crustacean Origin Network Oversight System) is an integrated ERP and traceability platform designed to monitor, manage, and record the shrimp supply chain from hatchery, farming ponds, logistics, processing, until end consumers.

This project focuses on transparency, accountability, and data integrity in aquaculture operations by combining web systems, mobile applications, IoT data ingestion, and blockchain-inspired traceability concepts.

CRONOS is developed as part of an academic research project and serves as a foundation for smart aquaculture management systems.

---

## Core Objectives

- Provide full traceability of shrimp production and distribution
- Enable real-time monitoring of pond and water quality data
- Support ERP-based operational workflows for aquaculture businesses
- Integrate web and mobile applications in a single ecosystem
- Prepare data structures suitable for blockchain-based verification
- Support scalable microservice deployment using containerization

---

## System Architecture Overview

- Web Frontend: Management dashboard, traceability views, reporting
- Mobile Application: Field operations, logistics updates, monitoring
- Backend Services: Authentication, ERP logic, traceability, analytics
- Database Layer: Structured transactional and historical data
- IoT Integration: MQTT-based real-time sensor data ingestion
- Infrastructure: Dockerized services for portability and scalability

---

## Technology Stack

### Backend Technologies

<p align="center">
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  </a>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  </a>
  <a href="https://fastapi.tiangolo.com/" target="_blank">
    <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  </a>
  <a href="https://www.python.org/" target="_blank">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  </a>
</p>

### Frontend & Mobile

<p align="center">
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a>
  <a href="https://kotlinlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />
  </a>
  <a href="https://developer.android.com/jetpack/compose" target="_blank">
    <img src="https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpack-compose&logoColor=white" />
  </a>
</p>

### Databases & ORM

<p align="center">
  <a href="https://www.postgresql.org/" target="_blank">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a>
  <a href="https://sequelize.org/" target="_blank">
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
  </a>
  <a href="https://www.sqlalchemy.org/" target="_blank">
    <img src="https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white" />
  </a>
</p>

### IoT & Messaging

<p align="center">
  <a href="https://mqtt.org/" target="_blank">
    <img src="https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white" />
  </a>
  <a href="https://mosquitto.org/" target="_blank">
    <img src="https://img.shields.io/badge/Mosquitto-3C5280?style=for-the-badge&logo=eclipse-mosquitto&logoColor=white" />
  </a>
</p>

### Containerization & DevOps

<p align="center">
  <a href="https://www.docker.com/" target="_blank">
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  </a>
  <a href="https://docs.docker.com/compose/" target="_blank">
    <img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  </a>
</p>

### Authentication & Security

<p align="center">
  <a href="https://jwt.io/" target="_blank">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  </a>
  <a href="https://helmetjs.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/Helmet.js-000000?style=for-the-badge&logo=helmet&logoColor=white" />
  </a>
</p>

---

## Quick Start Guide

### Option 1: Node.js (Express) Backend

```bash
git clone https://github.com/jokpram/SKRIPSI-PAK-ARDIAN-ERP-CRONOS-E-COMMERCE-TRACEABILITY-BERBASIS-BLOCKCHAIN-WEB-DAN-MOBILE.git
cd backend
cp .env.example .env
docker-compose up -d
Backend will be accessible at: http://localhost:9000

Option 2: FastAPI Backend with MQTT
bash
git clone https://github.com/jokpram/SKRIPSI-PAK-ARDIAN-ERP-CRONOS-E-COMMERCE-TRACEABILITY-BERBASIS-BLOCKCHAIN-WEB-DAN-MOBILE.git
cd microservices
cp .env.example .env
docker-compose up -d
API will be accessible at: http://localhost:8000

Environment Configuration
env
NODE_ENV=development
PORT=9000

DB_HOST=localhost
DB_PORT=5433
DB_NAME=cronostraceability_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_jwt_secret

MQTT_HOST=192.168.101.77
MQTT_PORT=1883
MQTT_TOPIC=tambak/dipasena
API Endpoints (High Level)
Method	Endpoint	Description
POST	/api/auth/login	User authentication
GET	/api/auth/me	Get authenticated user and role
GET	/api/shrimp/batches	Shrimp batch listing
POST	/api/shrimp/tracking	Trace shrimp movement
GET	/api/monitoring/water-quality	Water quality monitoring data
POST	/api/mqtt/publish	Publish MQTT sensor data
GET	/api/health	System health check
Development Notes
Supports multi-role users (farmer, logistics, client, admin)

Modular service-based backend architecture

Web and mobile clients consume the same API

Designed to support blockchain integration for immutable records

Dockerized for reproducible academic and production testing


This project is inspired by previous academic and practical works developed by senior contributors and is intended for educational, research, and prototype implementation purposes in smart aquaculture systems.

License
This repository is intended for academic use.
All rights reserved by the author.
