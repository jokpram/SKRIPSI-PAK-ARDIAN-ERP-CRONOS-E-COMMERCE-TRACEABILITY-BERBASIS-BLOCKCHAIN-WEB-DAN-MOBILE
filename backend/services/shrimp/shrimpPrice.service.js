// services/shrimp/shrimpPrice.service.js
import { ShrimpPrice } from '../../models/index.js';

export const create = (petambakId, data) =>
  ShrimpPrice.create({ ...data, petambak_id: petambakId });

export const approve = async (id, approved) => {
  const price = await ShrimpPrice.findByPk(id);
  price.approved = approved;
  return price.save();
};
