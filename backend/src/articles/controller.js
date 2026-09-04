const { db } = require("../service");

const createArticle = async (req, res) => {
  try {
    const {
      title,
      category,
      categoryLabel,
      excerpt,
      content,
      authorName,
      status,
      featured,
    } = req.body;

    if (!title || !category || !content) {
      return res.status(400).json({
        message: "Title, category and content are required",
      });
    }

    const articleData = {
      title: title.trim(),
      category: category.trim(),
      categoryLabel: categoryLabel?.trim() || "",
      excerpt: excerpt?.trim() || "",
      content: content.trim(),
      authorName: authorName?.trim() || "Fenestration Insider",
      status: status || "draft",
      featured: Boolean(featured),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const articleRef = await db.collection("article-news").add(articleData);

    return res.status(201).json({
      status: "success",
      message: "Article created successfully",
      id: articleRef.id,
    });
  } catch (error) {
    console.error("Create article error:", error);

    return res.status(500).json({
      status: "error",
      message: "Failed to create article",
      error: error.message,
    });
  }
};

// GET ALL ARTICLES FOR ADMIN
const getAllArticles = async (req, res) => {
  try {
    const snapshot = await db
      .collection("article-news")
      .orderBy("createdAt", "desc")
      .get();

    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      status: "success",
      articles,
    });
  } catch (error) {
    console.error("Get all articles error:", error);

    return res.status(500).json({
      status: "error",
      message: "Failed to fetch articles",
      error: error.message,
    });
  }
};

// GET ONLY PUBLISHED ARTICLES
const getPublishedArticles = async (req, res) => {
  try {
    const snapshot = await db
      .collection("article-news")
      .where("status", "==", "published")
      .get();

    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      status: "success",
      articles,
    });
  } catch (error) {
    console.error("Get published articles error:", error);

    return res.status(500).json({
      status: "error",
      message: "Failed to fetch published articles",
      error: error.message,
    });
  }
};

// UPDATE ARTICLE
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      category,
      categoryLabel,
      excerpt,
      content,
      authorName,
      status,
      featured,
    } = req.body;

    const articleRef = db.collection("article-news").doc(id);

    const articleDoc = await articleRef.get();

    if (!articleDoc.exists) {
      return res.status(404).json({
        status: "error",
        message: "Article not found",
      });
    }

    const updateData = {
      updatedAt: new Date(),
    };

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (category !== undefined) {
      updateData.category = category.trim();
    }

    if (categoryLabel !== undefined) {
      updateData.categoryLabel = categoryLabel?.trim() || "";
    }

    if (excerpt !== undefined) {
      updateData.excerpt = excerpt?.trim() || "";
    }

    if (content !== undefined) {
      updateData.content = content.trim();
    }

    if (authorName !== undefined) {
      updateData.authorName = authorName?.trim() || "Fenestration Insider";
    }

    if (status !== undefined) {
      updateData.status = status;
    }

    if (featured !== undefined) {
      updateData.featured = Boolean(featured);
    }

    await articleRef.update(updateData);

    return res.status(200).json({
      status: "success",
      message: "Article updated successfully",
      id,
    });
  } catch (error) {
    console.error("Update article error:", error);

    return res.status(500).json({
      status: "error",
      message: "Failed to update article",
      error: error.message,
    });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getPublishedArticles,
  updateArticle,
};
