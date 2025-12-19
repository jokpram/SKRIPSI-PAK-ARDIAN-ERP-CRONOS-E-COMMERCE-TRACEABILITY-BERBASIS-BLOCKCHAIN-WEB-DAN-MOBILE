// config/session.js
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import sequelize from './sequelize.js';

const Store = SequelizeStore(session.Store);

export const sessionStore = new Store({
  db: sequelize,
});

export const sessionConfig = {
  name: 'CRONOS_SESSION',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
