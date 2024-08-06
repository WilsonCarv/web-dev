const { Schema, model } = require('mongoose');
const { randomUUID } = require('crypto');
const PostSchema = new Schema({
	docId: {
		type: 'UUID',
		default: randomUUID()
	},
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
	likes: {
		type: Number,
		default: 0
	},
	active: {
		type: Boolean,
		default: true
	},
	metaData: {},
	comments: [
		{
			body: String,
			date: {
				type: Date,
				default: Date.now
			},
			id: {
				type: 'UUID',
				default: randomUUID()
			}
		}
	],
	socialMediaHandles: {
		type: Map,
		of: String
	}
});
PostSchema.methods.toJSON = function () {
	const { __v, _id, comments, socialMediaHandles, ...post } = this.toObject();
	let mappedComments = comments.map(comment => {
		delete comment._id;
		return comment;
	});
	let mappedSocialMediaHandles = Array.from(socialMediaHandles || new Map()).flatMap(
		([key, value]) => ({ key, value })
	);
	post.uid = _id;
	post.comments = mappedComments;
	post.socialMediaHandles = mappedSocialMediaHandles;
	return post;
};
module.exports = model('Post', PostSchema);
