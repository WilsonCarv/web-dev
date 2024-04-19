const { Router } = require('express');
const { postUser } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
	'/',
	[
		check('name', 'The name is required').not().isEmpty(),
		check('email', 'The email is required').isEmail(),
		check('password', 'The password is required').isLength({ min: 6 }),
		validateFields
	],
	postUser
);

module.exports = router;
