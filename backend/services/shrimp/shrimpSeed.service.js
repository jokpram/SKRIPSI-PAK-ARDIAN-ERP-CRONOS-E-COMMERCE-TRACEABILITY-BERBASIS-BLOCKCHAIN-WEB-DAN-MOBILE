// services/shrimp/shrimpSeed.service.js
import { ShrimpSeed } from '../../models/index.js';

export const create = (data) => ShrimpSeed.create(data);
