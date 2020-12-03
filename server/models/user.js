const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy');
const { schema } = require('./post');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
	firstName: {
		type: String,
		unique: false
	},
	lastName: {
		type: String,
		unique: false
	},
	email: {
		type: String,
		unique: true,
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
	},
	password: {
		type: String,
		unique: false,
		required: false
	},
	image: {
		type: String,
		unique: false,
		default: ""
	},
	bio: {
		type: String,
		unique: false,
		default: ""
	},
	linkedin: {
		type: String,
		unique: false,
		default: ""
	},
	github: {
		type: String,
		unique: false,
		default: ""
	},
	likes: {
		type: Number,
		unique: false
	},
	jsMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	jsStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	htmlMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	htmlStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	cssMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	cssStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	jqueryMentor:{
		type: Boolean,
		unique: false,
		default: false
	},
	jqueryStudent:{
		type: Boolean,
		unique: false,
		default: false
	},
	nodejsMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	nodejsStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	expressMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	expressStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	reactMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	reactStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	mongodbMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	mongodbStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	mysqlMentor: {
		type: Boolean,
		unique: false,
		default: false
	},
	mysqlStudent: {
		type: Boolean,
		unique: false,
		default: false
	},
	savedPosts: [{
		type: Schema.Types.ObjectId,
		ref: "Post",
		unique: false
	}],
	mentoring: [{
		type: Schema.Types.ObjectId,
		ref: "User",
		unique: false
	}],
	learningFrom: [{
		type: Schema.Types.ObjectId,
		ref: "User",
		unique: false
	}],
	posts: [
		{
		// Store ObjectIds in the array
		type: Schema.Types.ObjectId,
		// The ObjectIds will refer to the ids in the Post model
		ref: "Post"
		}
	]
});

// Define schema methods
userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
	if (!this.password) {
		// console.log('No password provided!');
		next();
	} else {
		this.password = this.hashPassword(this.password);
		next();
	}
})

// Create reference to User & export
const User = mongoose.model('User', userSchema);
module.exports = User;
