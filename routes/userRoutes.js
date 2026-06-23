const express = require("express");
const router = express.Router();
const {
  getApiStatus,
  getUsers,
} = require("../controllers/userController");

router.get("/", getApiStatus);
router.get("/users", getUsers);

module.exports = router;
