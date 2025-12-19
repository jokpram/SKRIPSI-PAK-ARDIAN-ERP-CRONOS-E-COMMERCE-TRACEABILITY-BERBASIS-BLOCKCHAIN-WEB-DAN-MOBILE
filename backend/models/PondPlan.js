// models/PondPlan.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('pond_plans', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  petambak_id: DataTypes.UUID,
  start_date: DataTypes.DATE,
  seed_quantity: DataTypes.INTEGER,
});
