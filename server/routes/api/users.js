const router = require("express").Router();
const userController = require("../../controllers/userController");

// /api/users/id
router.route("/:id")
    .get(userController.findById)
    .put(userController.updateProfile);
    // .delete(userController.remove)

// /api/users/mentor
router.route("/mentor")
    .get(userController.findMentor);

// /api/users/student
router.route("/student")
    .get(userController.findStudent);

module.exports = router;