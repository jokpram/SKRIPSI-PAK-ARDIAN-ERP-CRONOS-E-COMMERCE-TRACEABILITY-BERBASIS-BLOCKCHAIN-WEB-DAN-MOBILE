// controllers/auth/refreshToken.controller.js
import * as RefreshTokenService from '../../services/auth/refreshToken.service.js';

export const refresh = async (req, res, next) => {
  try {
    const tokens = await RefreshTokenService.rotateRefreshToken(
      req.body.refresh_token
    );
    res.json(tokens);
  } catch (e) {
    next(e);
  }
};
