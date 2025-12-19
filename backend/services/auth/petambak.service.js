// services/auth/petambak.service.js
import bcrypt from 'bcryptjs';
import { Petambak } from '../../models/index.js';
import { signAccessToken } from '../../utils/jwt.util.js';
import { createRefreshToken } from './refreshToken.service.js';

export const login = async (email, password) => {
  const user = await Petambak.findOne({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  const access_token = signAccessToken({
    id: user.id,
    role: 'petambak',
  });

  const refresh = await createRefreshToken({
    user_id: user.id,
    role: 'petambak',
  });

  return {
    access_token,
    refresh_token: refresh.token,
  };
};
