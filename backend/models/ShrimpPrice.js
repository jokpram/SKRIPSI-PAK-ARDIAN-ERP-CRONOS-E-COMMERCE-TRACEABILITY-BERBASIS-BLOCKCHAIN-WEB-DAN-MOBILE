// models/ShrimpPrice.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('shrimp_prices', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  petambak_id: DataTypes.UUID,
  shrimp_type_id: DataTypes.UUID,
  price: DataTypes.DECIMAL,
  approved: { type: DataTypes.BOOLEAN, defaultValue: false },
});
