// controllers/shrimp/shrimpSeed.controller.js
import * as ShrimpSeedService from '../../services/shrimp/shrimpSeed.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await ShrimpSeedService.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};
