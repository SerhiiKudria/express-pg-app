const { Phone } = require('../models');

module.exports.getPhones = async (req, res, next) => {
    const { pagination } = req;
  
    try {
      const foundPhones = await Phone.getAll(pagination);
      res.status(200).send(foundPhones);
    } catch (err) {
      next(err);
    }
  };

  module.exports.getUsersPhones = async (req, res, next) => {
    const { pagination , filter, period } = req;
    const { userId } = req.params;
  
    try {
      const foundPhones = await Phone.getUsersPhones({ pagination , filter, period, userId});
      res.status(200).send(foundPhones);
    } catch (err) {
      next(err);
    }
  };  