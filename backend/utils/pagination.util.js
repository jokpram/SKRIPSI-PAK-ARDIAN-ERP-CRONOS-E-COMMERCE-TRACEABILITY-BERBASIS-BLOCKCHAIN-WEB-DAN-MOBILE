// utils/pagination.util.js
export const paginate = ({ page = 1, limit = 10 }) => {
    const offset = (page - 1) * limit;
    return {
      limit: Number(limit),
      offset,
    };
  };
  