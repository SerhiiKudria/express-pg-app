const {
  USER_CREATION_VALIDATION_SCHEMA,
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
