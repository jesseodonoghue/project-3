const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate({ path: "posts", options: { sort: { 'date': -1 } } })
        .then(users => {
          res.json({ posts: users[0].posts });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ posts: null });
    }
  },
  findById: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate("posts")
        .then(users => {
          const userPost = users[0].posts.filter(b => b._id.toString() === req.params.id);
          res.json({ posts: userPost[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ userPost: null });
    }
  },
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbPost => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { posts: dbPost._id } }, { new: true });
      })
      .then((dbUser) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
  // remove: function(req, res) {
  //   db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { posts: new ObjectId(req.params.id) } }, { new: true })
  //     .then(() => {
  //       db.Posts
  //         .findOneAndDelete({ _id: req.params.id })
  //         .then(dbPost => res.json(dbPost))
  //         .catch(err => res.status(422).json(err));
  //     });
  // }
};
