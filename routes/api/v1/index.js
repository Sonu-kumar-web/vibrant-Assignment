const express = require("express");
const router = express();

const userController = require("../../../controllers/api/v1/user_controller");

// For Customer routes
router.post("/create", userController.createNewUser);
router.get("/users", userController.allUsers);
router.put("/edit", userController.editUser);
router.delete("/delete", userController.deleteUser);
module.exports = router;
