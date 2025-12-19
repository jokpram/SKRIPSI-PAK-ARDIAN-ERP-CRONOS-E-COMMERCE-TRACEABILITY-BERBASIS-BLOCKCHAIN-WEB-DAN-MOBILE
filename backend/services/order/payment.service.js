// services/order/payment.service.js
import { Payment } from '../../models/index.js';

export const create = (data) =>
  Payment.create({ ...data, status: 'WAITING' });

export const confirm = async (id) => {
  const payment = await Payment.findByPk(id);
  payment.status = 'PAID';
  return payment.save();
};
