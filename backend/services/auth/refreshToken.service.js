// services/auth/refreshToken.service.js
import { RefreshToken } from '../../models/index.js';
import { signAccessToken, signRefreshToken } from '../../utils/jwt.util.js';
import moment from 'moment';

export const createRefreshToken = async ({ user_id, role }) => {
  const refreshToken = signRefreshToken({ id: user_id, role });

  return RefreshToken.create({
    user_id,
    role,
    token: refreshToken,
    expires_at: moment().add(30, 'days').toDate(),
  });
};

export const rotateRefreshToken = async (oldToken) => {
  const stored = await RefreshToken.findOne({ where: { token: oldToken } });
  if (!stored) throw new Error('Invalid refresh token');

  await stored.destroy();

  const accessToken = signAccessToken({
    id: stored.user_id,
    role: stored.role,
  });

  const newRefresh = await createRefreshToken({
    user_id: stored.user_id,
    role: stored.role,
  });

  return {
    access_token: accessToken,
    refresh_token: newRefresh.token,
  };
};

export const revokeAll = async (user_id) => {
  await RefreshToken.destroy({ where: { user_id } });
};
