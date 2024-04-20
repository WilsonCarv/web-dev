const { Schema, model } = require('mongoose');
const PostSchema = new Schema({
	title: {
		type: String,
		required: [true, 'The title is required']
	},
	content: {
		type: String,
		required: [true, 'The content is required']
	},
	image: {
		type: String,
		required: false
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	comments: [
		{
			body: String,
			date: Date
		}
	]
});
PostSchema.methods.toJSON = function () {
	const { __v, _id, comments, ...post } = this.toObject();
	let mappedComments = comments.map(comment => {
		comment.id = comment._id;
		delete comment._id;
		return comment;
	});
	post.uid = _id;
	post.comments = mappedComments;
	return post;
};
module.exports = model('Post', PostSchema);
