module.exports.addPeriod = (req, res, next) => {

  const { startDate = '0001-01-01', endDate = '0001-01-01' } = req.query;

  req.period = { startDate,  endDate };

  next();
};
