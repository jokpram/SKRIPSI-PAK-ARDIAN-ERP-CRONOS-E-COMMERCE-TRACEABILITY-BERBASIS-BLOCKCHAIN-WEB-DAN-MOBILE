// controllers/order/payment.controller.js
import * as PaymentService from '../../services/order/payment.service.js';

export const create = async (req, res, next) => {
  try {
    const payment = await PaymentService.create(req.body);
    res.status(201).json(payment);
  } catch (e) {
    next(e);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const payment = await PaymentService.confirm(req.params.id);
    res.json(payment);
  } catch (e) {
    next(e);
  }
};
