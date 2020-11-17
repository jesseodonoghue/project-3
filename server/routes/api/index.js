const router = require("express").Router();
const postsRoutes = require("./posts");
const userRoutes = require("./users");

// Book routes
router.use("/posts", postsRoutes);
router.use("/users", userRoutes)

module.exports = router;
