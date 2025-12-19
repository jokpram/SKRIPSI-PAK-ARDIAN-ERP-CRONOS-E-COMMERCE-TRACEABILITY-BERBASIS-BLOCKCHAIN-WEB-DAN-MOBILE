// controllers/logistics/logisticPrice.controller.js
import * as LogisticPriceService from '../../services/logistics/logisticPrice.service.js';

export const create = async (req, res, next) => {
  try {
    const data = await LogisticPriceService.create(req.user.id, req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};

export const approve = async (req, res, next) => {
  try {
    const data = await LogisticPriceService.approve(
      req.params.id,
      req.body.approved
    );
    res.json(data);
  } catch (e) {
    next(e);
  }
};
