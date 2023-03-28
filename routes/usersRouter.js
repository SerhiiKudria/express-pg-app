const { Router } = require('express');
const { usersController, phonesController } = require('../controllers');
const { paginate, validate, addPeriod, addFilter } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(validate.validateUserOnCreate, usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

// /api/users/1
usersRouter
  .route('/:userId')
  .patch(validate.validateUserOnUpdate, usersController.updateUser)
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

usersRouter
  .route('/:userId/phones')
  .get(
    addPeriod.addPeriod, 
    addFilter.addFilter, 
    validate.validatePeriod,
    paginate.paginateUser, 
    phonesController.getUsersPhones)
;

module.exports = usersRouter;

//-------------------------------------------
// onclick <-> HTTPMethod+route
// const listener = () => {};
// button.addEventListener('click',listener)
// button.addEventListener('click',listener1)
// button.addEventListener('click',listener2)
