const { response, request } = require('express');
const User = require('../models/user');
const postUser = async (req = request, res = response) => {
	try {
		const { name, email, password } = req.body;
		const user = new User({ name, email, password });

		await user.save();
		res.status(201).json({
			ok: true,
			user
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error trying to save the user'
		});
	}
};
module.exports = {
	postUser
};
