module.exports.addFilter = (req, res, next) => {
  
  const { brand = '' } = req.query;

  req.filter = { brand };

  next();
};
