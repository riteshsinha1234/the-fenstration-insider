const express = require("express");

const controller = require("./controller");

const router = express.Router();

// Get all articles for admin
router.get("/", controller.getAllArticles);

// Get published articles for frontend
router.get("/published", controller.getPublishedArticles);

// Create new article from admin
router.post("/", controller.createArticle);

// Update article
router.patch("/:id", controller.updateArticle);

module.exports = router;
