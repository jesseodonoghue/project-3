const router = require("express").Router();
const userController = require("../../controllers/userController");

// /api/users/id
router.route("/:id")
    .get(userController.findById)
    .put(userController.updateProfile);
    // .delete(userController.remove)

// /api/users/mentor/language
router.route("/mentor/:language")
    .get(userController.findMentor);

// /api/users/student/language
router.route("/student/:language")
    .get(userController.findStudent);

    // /api/users/image/id
router.route("/image/:id")
    .put(userController.updateImage);

module.exports = router;