// utils/hash.util.js
import crypto from 'crypto';

export const sha256 = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

export const generateBlock = (payload, previousHash = null) => {
  const body = JSON.stringify({
    payload,
    previousHash,
    timestamp: Date.now(),
  });

  return {
    hash: sha256(body),
    previous_hash: previousHash,
  };
};
