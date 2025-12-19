// models/Payment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('payments', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  order_id: DataTypes.UUID,
  method: { type: DataTypes.STRING, defaultValue: 'QRIS' },
  status: DataTypes.STRING,
});
