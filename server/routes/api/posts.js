const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/")
  .get(postsController.findAllPosts)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findByPostId)
  .put(postsController.update)
  // .delete(postsController.remove);

router
  .route("/userPosts/:id")
  .get(postsController.findAllByUserId)

module.exports = router;
