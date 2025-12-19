import * as PondLocationService from '../../services/pond/pondLocation.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await PondLocationService.createLocation(
      req.user.id,
      req.body
    );
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};

export const myLocations = async (req, res, next) => {
  try {
    const data = await PondLocationService.getMyLocations(req.user.id);
    res.json(data);
  } catch (e) {
    next(e);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await PondLocationService.updateLocation(
      req.params.id,
      req.user.id,
      req.body
    );
    res.json(data);
  } catch (e) {
    next(e);
  }
};

export const remove = async (req, res, next) => {
  try {
    await PondLocationService.deleteLocation(req.params.id, req.user.id);
    res.json({ message: 'Location deleted' });
  } catch (e) {
    next(e);
  }
};
