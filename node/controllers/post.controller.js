const { request, response } = require('express');
const Post = require('../models/post');

const createPost = async (req = request, res = response) => {
	try {
		const { title, content, image, user, comments } = req.body;
		const post = new Post({ title, content, image, user, comments });
		await post.save();

		res.status(201).json({
			post
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error trying to save the post'
		});
	}
};
const getPostsByUser = async (req = request, res = response) => {
	try {
		const { userId } = req.params;
		const posts = await Post.find({ user: userId });
		res.json({
			posts
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error trying to get the posts'
		});
	}
};
module.exports = {
	createPost,
	getPostsByUser
};
