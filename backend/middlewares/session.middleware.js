// middlewares/session.middleware.js
export const attachSessionUser = (req, res, next) => {
    if (req.session?.user) req.user = req.session.user;
    next();
  };
  