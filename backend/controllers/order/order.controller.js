// controllers/order/order.controller.js
import * as OrderService from '../../services/order/order.service.js';

export const checkout = async (req, res, next) => {
  try {
    const order = await OrderService.createOrder(
      req.user.id,
      req.body.items,
      req.body.total
    );
    res.status(201).json(order);
  } catch (e) {
    next(e);
  }
};
