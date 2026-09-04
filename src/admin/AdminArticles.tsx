import { useEffect, useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

import AdminHeader from "../components/admin-comp/AdminHeader";
import AllAdminArticle from "../components/admin-comp/AllAdminArticle";
import CustomDropdown from "../components/CustomDropdown";
import CustomTextField from "../components/CustomTextField";

import {
  Primary,
  background,
  borderColor,
  red,
  txtLight,
  txtMuted,
  txtWhite,
} from "../components/Colors";

interface AdminArticle {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  excerpt: string;
  content: string;
  authorName: string;
  status: string;
  featured: boolean;
  createdAt?: {
    _seconds?: number;
    _nanoseconds?: number;
  };
  updatedAt?: {
    _seconds?: number;
    _nanoseconds?: number;
  };
}

const categoryOptions = [
  {
    label: "Facades",
    value: "facades",
  },
  {
    label: "Windows & Doors",
    value: "windows-doors",
  },
  {
    label: "Glass & Glazing",
    value: "glass-glazing",
  },
  {
    label: "Hardware & Automation",
    value: "hardware-automation",
  },
  {
    label: "Sustainability",
    value: "sustainability",
  },
  {
    label: "Market & Prices",
    value: "market-prices",
  },
  {
    label: "Projects",
    value: "projects",
  },
  {
    label: "Interviews",
    value: "interviews",
  },
];

const categoryLabelOptions = [
  {
    label: "Facades",
    value: "Facades",
  },
  {
    label: "Windows & Doors",
    value: "Windows & Doors",
  },
  {
    label: "Glass & Glazing",
    value: "Glass & Glazing",
  },
  {
    label: "Hardware & Automation",
    value: "Hardware & Automation",
  },
  {
    label: "Sustainability",
    value: "Sustainability",
  },
  {
    label: "Market & Prices",
    value: "Market & Prices",
  },
  {
    label: "Projects",
    value: "Projects",
  },
  {
    label: "Interviews",
    value: "Interviews",
  },
];

const statusOptions = [
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Published",
    value: "published",
  },
];

export default function AdminArticles() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryLabel, setCategoryLabel] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [status, setStatus] = useState("draft");
  const [featured, setFeatured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setCategoryLabel("");
    setExcerpt("");
    setContent("");
    setAuthorName("");
    setStatus("draft");
    setFeatured(false);
  };

  const fetchArticles = async () => {
    try {
      setArticlesLoading(true);

      const response = await fetch("/api/articles");

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed to fetch articles:", data);
        return;
      }

      setArticles(data.articles || []);
    } catch (error) {
      console.error("Fetch articles error:", error);
    } finally {
      setArticlesLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent<string | number>) => {
    const selectedCategory = String(event.target.value);

    setCategory(selectedCategory);
    setError("");

    const selectedOption = categoryOptions.find(
      (option) => option.value === selectedCategory,
    );

    if (selectedOption) {
      setCategoryLabel(selectedOption.label);
    }
  };

  const handleCategoryLabelChange = (
    event: SelectChangeEvent<string | number>,
  ) => {
    setCategoryLabel(String(event.target.value));
  };

  const handleStatusChange = (event: SelectChangeEvent<string | number>) => {
    setStatus(String(event.target.value));
  };

  // UPDATE ARTICLE STATUS IN LOCAL UI
  const handleArticleStatusChange = (articleId: string, newStatus: string) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId
          ? {
              ...article,
              status: newStatus,
            }
          : article,
      ),
    );
  };

  const handleAddArticle = async () => {
    if (!title.trim()) {
      setError("Article title is required.");
      return;
    }

    if (!category.trim()) {
      setError("Category is required.");
      return;
    }

    if (!content.trim()) {
      setError("Article content is required.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          category: category.trim(),
          categoryLabel: categoryLabel.trim(),
          excerpt: excerpt.trim(),
          content: content.trim(),
          authorName: authorName.trim(),
          status,
          featured,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to create article.");
        return;
      }

      setSuccess("Article created successfully.");
      resetForm();
      await fetchArticles();
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error) {
      console.error("Create article error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminHeader>
      <Box
        sx={{
          padding: { xs: "18px", md: "30px" },
        }}
      >
        {/* PAGE TITLE */}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: "8px", md: "12px" },
            mb: { xs: "20px", md: "30px" },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: txtWhite,
                fontSize: { xs: "22px", md: "30px" },
                fontWeight: 700,
              }}
            >
              Articles & News
            </Typography>

            <Typography
              sx={{
                color: txtMuted,
                fontSize: { xs: "12px", md: "14px" },
                mt: "4px",
              }}
            >
              Create and publish articles for The Fenestration Insider.
            </Typography>
          </Box>
        </Box>

        {/* CREATE ARTICLE FORM */}

        <Box
          sx={{
            width: "100%",
            backgroundColor: background,
            border: `1px solid ${borderColor}`,
            borderRadius: "6px",
            padding: { xs: "18px", md: "28px" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 700,
              mb: { xs: "18px", md: "24px" },
            }}
          >
            Add New Article
          </Typography>

          {/* TITLE */}

          <Box sx={{ mb: "18px" }}>
            <Typography
              sx={{
                color: txtLight,
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 600,
                mb: "7px",
              }}
            >
              Article Title *
            </Typography>

            <CustomTextField
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setError("");
              }}
              placeholder="Enter article title"
              height="56px"
            />
          </Box>

          {/* CATEGORY ROW */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: "16px", md: "20px" },
              mb: "18px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: txtLight,
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 600,
                  mb: "7px",
                }}
              >
                Category *
              </Typography>

              <CustomDropdown
                id="article-category"
                value={category}
                onChange={handleCategoryChange}
                options={categoryOptions}
                height="56px"
                borderRadius="4px"
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: txtLight,
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 600,
                  mb: "7px",
                }}
              >
                Category Label
              </Typography>

              <CustomDropdown
                id="article-category-label"
                value={categoryLabel}
                onChange={handleCategoryLabelChange}
                options={categoryLabelOptions}
                height="56px"
                borderRadius="4px"
              />
            </Box>
          </Box>

          {/* EXCERPT */}

          <Box sx={{ mb: "18px" }}>
            <Typography
              sx={{
                color: txtLight,
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 600,
                mb: "7px",
              }}
            >
              Excerpt
            </Typography>

            <CustomTextField
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="Write a short article summary"
              multiline
              rows={3}
            />
          </Box>

          {/* CONTENT */}

          <Box sx={{ mb: "18px" }}>
            <Typography
              sx={{
                color: txtLight,
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 600,
                mb: "7px",
              }}
            >
              Article Content *
            </Typography>

            <CustomTextField
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
                setError("");
              }}
              placeholder="Write the full article content"
              multiline
              rows={8}
            />
          </Box>

          {/* AUTHOR + READ TIME */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: "16px", md: "20px" },
              mb: "18px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: txtLight,
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 600,
                  mb: "7px",
                }}
              >
                Author
              </Typography>

              <CustomTextField
                value={authorName}
                onChange={(event) => setAuthorName(event.target.value)}
                placeholder="Author name"
                height="56px"
              />
            </Box>
          </Box>

          {/* STATUS + FEATURED */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: "16px", md: "20px" },
              alignItems: "end",
              mb: "20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: txtLight,
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 600,
                  mb: "7px",
                }}
              >
                Status
              </Typography>

              <CustomDropdown
                id="article-status"
                value={status}
                onChange={handleStatusChange}
                options={statusOptions}
                height="56px"
                borderRadius="4px"
              />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={featured}
                  onChange={(event) => setFeatured(event.target.checked)}
                  sx={{
                    color: txtMuted,
                    "&.Mui-checked": {
                      color: Primary,
                    },
                  }}
                />
              }
              label="Featured Article"
              sx={{
                color: txtLight,
                m: 0,
              }}
            />
          </Box>

          {/* ERROR */}

          {error && (
            <Typography
              sx={{
                color: red,
                fontSize: { xs: "12px", md: "14px" },
                mb: "14px",
              }}
            >
              {error}
            </Typography>
          )}

          {/* SUCCESS */}

          {success && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: "30px",
                mb: "20px",
              }}
            >
              <Typography
                sx={{
                  color: Primary,
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {success}
              </Typography>
            </Box>
          )}

          {/* SUBMIT */}

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "stretch", md: "flex-end" },
            }}
          >
            <Box
              component="button"
              type="button"
              onClick={handleAddArticle}
              disabled={loading}
              sx={{
                width: { xs: "100%", md: "200px" },
                height: "48px",
                border: `1px solid ${Primary}`,
                borderRadius: "4px",
                backgroundColor: Primary,
                color: background,
                fontSize: { xs: "13px", md: "14px" },
                fontWeight: 800,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                "&:hover": {
                  opacity: loading ? 0.7 : 0.9,
                },
              }}
            >
              {loading ? "ADDING..." : "ADD ARTICLE"}
            </Box>
          </Box>
        </Box>

        {/* ADMIN ARTICLE LIST */}

        <AllAdminArticle
          articles={articles}
          articlesLoading={articlesLoading}
          onStatusChange={handleArticleStatusChange}
        />
      </Box>
    </AdminHeader>
  );
}
