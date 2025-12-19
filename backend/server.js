// server.js (UPDATED – FINAL)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { sessionConfig, sessionStore } from './config/index.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { attachSessionUser } from './middlewares/session.middleware.js';
import { logger } from './utils/logger.util.js';

dotenv.config();

const app = express();

/* ===========================
   BASIC CONFIG
=========================== */
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

/* ===========================
   SESSION
=========================== */
app.use(session(sessionConfig));
sessionStore.sync();

/* ===========================
   ATTACH SESSION USER
=========================== */
app.use(attachSessionUser);

/* ===========================
   ROOT / HEALTH CHECK
=========================== */
app.get('/', (req, res) => {
  res.json({
    name: 'CRONOS Smart Tambak API',
    version: '2.0.0',
    status: 'RUNNING',
    environment: process.env.NODE_ENV || 'development',
  });
});

/* ===========================
   ROUTES
=========================== */
app.use('/api', routes);

/* ===========================
   ERROR HANDLER
=========================== */
app.use(errorHandler);

/* ===========================
   SERVER & DATABASE
=========================== */
const PORT = process.env.PORT || 9000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      logger.info(`CRONOS API running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();
