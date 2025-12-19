// utils/transaction.util.js
import sequelize from '../config/sequelize.js';

export const withTransaction = async (callback) => {
  const t = await sequelize.transaction();
  try {
    const result = await callback(t);
    await t.commit();
    return result;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};
