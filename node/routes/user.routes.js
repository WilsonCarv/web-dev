const { Router } = require('express');
const { postUser } = require('../controllers/user.controller');

const router = Router();

router.post('/', postUser);

module.exports = router;
