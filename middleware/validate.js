const {
  USER_CREATION_VALIDATION_SCHEMA, USER_UPDATE_VALIDATION_SCHEMA, GET_USERS_PHONES,
} = require('../utils/validationSchemas');

module.exports.validateUserOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await USER_CREATION_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUserOnUpdate = async (req, res, next) => {
  const { body } = req;
  const { userId } = req.params;
  const  bodyUpdate  = {userId, ...body};

  try {
    req.body = await USER_UPDATE_VALIDATION_SCHEMA.validate(bodyUpdate);

    next();
  } catch (err) {
 
    next(err);
  }
};

module.exports.validatePeriod = async (req, res, next) => {

const { startDate , endDate } = req.period;

 try {
    req.period = await GET_USERS_PHONES.validate({startDate, endDate });
    req.period  = {startDate, endDate }

    next();
  } catch (err) {
 
    next(err);
  }
};