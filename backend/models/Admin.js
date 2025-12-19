// models/Admin.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('admins', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});
