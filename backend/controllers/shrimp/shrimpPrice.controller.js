// controllers/shrimp/shrimpPrice.controller.js
import * as ShrimpPriceService from '../../services/shrimp/shrimpPrice.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await ShrimpPriceService.create(req.user.id, req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};

export const approve = async (req, res, next) => {
  try {
    const data = await ShrimpPriceService.approve(
      req.params.id,
      req.body.approved
    );
    res.json(data);
  } catch (e) {
    next(e);
  }
};
