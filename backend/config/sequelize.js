// config/sequelize.js
import { Sequelize } from 'sequelize';
import db from './database.js';

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
});

export default sequelize;
