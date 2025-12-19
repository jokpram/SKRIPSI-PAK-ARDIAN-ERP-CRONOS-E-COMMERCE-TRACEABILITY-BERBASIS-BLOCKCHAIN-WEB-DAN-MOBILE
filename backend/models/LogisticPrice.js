// models/LogisticPrice.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('logistic_prices', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  logistik_id: DataTypes.UUID,
  price_per_km: DataTypes.DECIMAL,
  approved: { type: DataTypes.BOOLEAN, defaultValue: false },
});
