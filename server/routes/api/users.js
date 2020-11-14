const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:id")
    .get(userController.findById)
    .put(userController.updateProfile);
    // .delete(userController.remove)
    
router.route("/mentor")
    .get(userController.findMentor);
    
router.route("/student")
    .get(userController.findStudent);

module.exports = router;