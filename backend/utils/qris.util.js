// utils/qris.util.js
import crypto from 'crypto';

/**
 * QRIS INTERNAL GENERATOR
 * TANPA API PIHAK KETIGA
 */
export const generateQrisPayload = ({ orderId, amount }) => {
  const raw = `CRONOS|QRIS|${orderId}|${amount}|${Date.now()}`;
  const signature = crypto.createHmac('sha256', process.env.JWT_SECRET)
    .update(raw)
    .digest('hex');

  return {
    qris_string: raw,
    signature,
  };
};

export const verifyQrisPayload = ({ qris_string, signature }) => {
  const expected = crypto.createHmac('sha256', process.env.JWT_SECRET)
    .update(qris_string)
    .digest('hex');

  return expected === signature;
};
