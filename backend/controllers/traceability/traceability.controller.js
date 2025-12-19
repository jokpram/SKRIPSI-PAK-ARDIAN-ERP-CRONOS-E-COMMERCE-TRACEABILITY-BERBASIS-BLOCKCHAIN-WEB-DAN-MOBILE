// controllers/traceability/traceability.controller.js
import * as TraceabilityService from '../../services/traceability/traceability.service.js';

export const create = async (req, res, next) => {
  try {
    const trace = await TraceabilityService.create(req.body);
    res.status(201).json(trace);
  } catch (e) {
    next(e);
  }
};
