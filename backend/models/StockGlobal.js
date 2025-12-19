// models/StockGlobal.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('stock_globals', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  shrimp_type_id: DataTypes.UUID,
  quantity: DataTypes.INTEGER,
});
