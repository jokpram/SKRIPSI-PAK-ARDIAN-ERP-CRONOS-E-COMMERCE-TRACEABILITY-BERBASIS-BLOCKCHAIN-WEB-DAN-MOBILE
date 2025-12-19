import { PondLocation } from '../../models/index.js';

export const createLocation = async (petambak_id, payload) => {
  return PondLocation.create({
    petambak_id,
    ...payload,
  });
};

export const getMyLocations = async (petambak_id) => {
  return PondLocation.findAll({
    where: { petambak_id },
    order: [['createdAt', 'DESC']],
  });
};

export const updateLocation = async (id, petambak_id, payload) => {
  const location = await PondLocation.findOne({
    where: { id, petambak_id },
  });
  if (!location) throw new Error('Location not found');

  return location.update(payload);
};

export const deleteLocation = async (id, petambak_id) => {
  const location = await PondLocation.findOne({
    where: { id, petambak_id },
  });
  if (!location) throw new Error('Location not found');

  await location.destroy();
};
