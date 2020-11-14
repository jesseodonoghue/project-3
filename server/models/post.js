const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },  
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  attachment: {
    type: String
  },
  createdby: {
    type: Schema.Types.ObjectId
  },
  likes: {
    type: Number
  },
  replies: [{
    body: {
      type: String
    },
    createdby: {
      type: Schema.Types.ObjectId
    },
    likes: {
      type: Number
    }
  }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
