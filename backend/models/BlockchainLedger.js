// models/BlockchainLedger.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export default sequelize.define('blockchain_ledgers', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  traceability_id: DataTypes.UUID,
  hash: DataTypes.STRING,
  previous_hash: DataTypes.STRING,
});
