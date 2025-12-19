// models/OrderItem.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('order_items', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  order_id: DataTypes.UUID,
  shrimp_price_id: DataTypes.UUID,
  quantity: DataTypes.INTEGER,
});
