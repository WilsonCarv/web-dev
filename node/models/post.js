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
	}
});
PostSchema.methods.toJSON = function () {
	const { __v, _id, ...post } = this.toObject();
	post.uid = _id;
	return post;
};
module.exports = model('Post', PostSchema);
