// models/HarvestPlan.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('harvest_plans', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  pond_plan_id: DataTypes.UUID,
  estimated_date: DataTypes.DATE,
});
