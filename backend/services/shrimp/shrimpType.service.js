// services/shrimp/shrimpType.service.js
import { ShrimpType } from '../../models/index.js';

export const create = (data) => ShrimpType.create(data);
export const list = () => ShrimpType.findAll();
