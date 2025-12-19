// models/ShrimpSeed.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('shrimp_seeds', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  shrimp_type_id: DataTypes.UUID,
  supplier: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
});
