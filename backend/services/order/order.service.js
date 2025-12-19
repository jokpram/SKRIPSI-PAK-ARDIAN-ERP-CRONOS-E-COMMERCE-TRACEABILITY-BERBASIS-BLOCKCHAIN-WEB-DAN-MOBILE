// services/order/order.service.js
import { Order, OrderItem } from '../../models/index.js';

export const createOrder = async (konsumenId, items, total) => {
  const order = await Order.create({
    konsumen_id: konsumenId,
    total_price: total,
    status: 'PENDING',
  });

  for (const item of items) {
    await OrderItem.create({ ...item, order_id: order.id });
  }
  return order;
};
