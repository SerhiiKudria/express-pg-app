module.exports.paginateUser = (req, res, next) => {
  // отримати page, results
  const { page = 1, results = 5 } = req.query;

  // порахувати limit, offset
  const limit = results;
  const offset = (page - 1) * results;

  // впаяти limit, offset в req
  req.pagination = { limit, offset };

  next();
};
