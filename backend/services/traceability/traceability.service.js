// services/traceability/traceability.service.js
import crypto from 'crypto';
import { Traceability, BlockchainLedger } from '../../models/index.js';

export const create = async (data) => {
  const trace = await Traceability.create(data);
  const hash = crypto
    .createHash('sha256')
    .update(JSON.stringify(data))
    .digest('hex');

  await BlockchainLedger.create({
    traceability_id: trace.id,
    hash,
    previous_hash: null,
  });

  return trace;
};
