const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	name: {
		type: String,
		required: [true, 'The name is required']
	},
	email: {
		type: String,
		required: [true, 'The email is required'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'The password is required']
	},
	role: {
		type: String,
		required: true,
		default: 'USER_ROLE'
	},
	state: {
		type: Boolean,
		default: true
	}
});
UserSchema.methods.toJSON = function () {
	const { __v, password, _id, ...user } = this.toObject();
	user.uid = _id;
	return user;
};
module.exports = model('User', UserSchema);
