// models/Order.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('orders', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  konsumen_id: DataTypes.UUID,
  total_price: DataTypes.DECIMAL,
  status: DataTypes.STRING,
});
