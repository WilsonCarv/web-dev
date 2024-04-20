const { Router } = require('express');
const { createPost, getPostsByUser } = require('../controllers/post.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
	'/',
	[
		check('title', 'The title is required').not().isEmpty(),
		check('content', 'The content is required').not().isEmpty(),
		check('user', 'The user is required').isMongoId(),
		validateFields
	],
	createPost
);

router.get(
	'/:userId',
	[check('userId', 'The userId is required').isMongoId(), validateFields],
	getPostsByUser
);

module.exports = router;
