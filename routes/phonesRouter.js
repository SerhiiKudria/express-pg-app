const { Router } = require('express');

// /api/phones
const phonesRouter = Router();

phonesRouter.get('/', (req, res) => res.send('OK'));

module.exports = phonesRouter;
