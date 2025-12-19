// services/logistics/logisticPrice.service.js
import { LogisticPrice } from '../../models/index.js';

export const create = (logistikId, data) =>
  LogisticPrice.create({ ...data, logistik_id: logistikId });

export const approve = async (id, approved) => {
  const price = await LogisticPrice.findByPk(id);
  price.approved = approved;
  return price.save();
};
