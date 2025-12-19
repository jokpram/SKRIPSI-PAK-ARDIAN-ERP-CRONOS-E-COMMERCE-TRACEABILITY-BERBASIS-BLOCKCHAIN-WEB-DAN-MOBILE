// models/index.js
import sequelize from '../config/sequelize.js';

import Admin from './Admin.js';
import Petambak from './Petambak.js';
import Logistik from './Logistik.js';
import Konsumen from './Konsumen.js';

import RefreshToken from './RefreshToken.js';
import PondLocation from './PondLocation.js';

import ShrimpType from './ShrimpType.js';
import ShrimpSeed from './ShrimpSeed.js';
import Feed from './Feed.js';
import Medicine from './Medicine.js';
import PondPlan from './PondPlan.js';
import HarvestPlan from './HarvestPlan.js';
import ShrimpPrice from './ShrimpPrice.js';
import LogisticPrice from './LogisticPrice.js';
import StockGlobal from './StockGlobal.js';

import Cart from './Cart.js';
import CartItem from './CartItem.js';
import Order from './Order.js';
import OrderItem from './OrderItem.js';
import Payment from './Payment.js';

import Traceability from './Traceability.js';
import BlockchainLedger from './BlockchainLedger.js';

/* =======================
   ASSOCIATIONS
======================= */

// AUTH
Admin.hasMany(RefreshToken, { foreignKey: 'user_id' });
Petambak.hasMany(RefreshToken, { foreignKey: 'user_id' });
Logistik.hasMany(RefreshToken, { foreignKey: 'user_id' });
Konsumen.hasMany(RefreshToken, { foreignKey: 'user_id' });

// PETAMBAK
Petambak.hasMany(ShrimpPrice);
ShrimpPrice.belongsTo(Petambak);

Petambak.hasMany(PondPlan);
PondPlan.belongsTo(Petambak);

PondPlan.hasMany(HarvestPlan);
HarvestPlan.belongsTo(PondPlan);

Petambak.hasMany(PondLocation, { foreignKey: 'petambak_id' });
PondLocation.belongsTo(Petambak, { foreignKey: 'petambak_id' });

// LOGISTIK
Logistik.hasMany(LogisticPrice);
LogisticPrice.belongsTo(Logistik);

// KONSUMEN
Konsumen.hasOne(Cart);
Cart.belongsTo(Konsumen);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Order.belongsTo(Konsumen);
Order.hasMany(OrderItem);

Order.hasOne(Payment);
Order.hasOne(Traceability);

// TRACEABILITY
Traceability.hasMany(BlockchainLedger);
BlockchainLedger.belongsTo(Traceability);

/* =======================
   EXPORTS
======================= */
export {
  sequelize,
  Admin,
  Petambak,
  Logistik,
  Konsumen,
  RefreshToken,
  ShrimpType,
  ShrimpSeed,
  Feed,
  Medicine,
  PondPlan,
  HarvestPlan,
  ShrimpPrice,
  LogisticPrice,
  StockGlobal,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Traceability,
  BlockchainLedger,
  PondLocation,
};
