// controllers/shrimp/shrimpType.controller.js
import * as ShrimpTypeService from '../../services/shrimp/shrimpType.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await ShrimpTypeService.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};

export const list = async (req, res, next) => {
  try {
    res.json(await ShrimpTypeService.list());
  } catch (e) {
    next(e);
  }
};
