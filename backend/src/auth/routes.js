const express = require("express");
const controller = require("./controller");
const router = express.Router();
router.get("/verify", controller.verifyAdmin);
module.exports = router;
