import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

import CustomContainer from "../CustomContainer";
import CustomDropdown from "../CustomDropdown";

import {
  Primary,
  background,
  borderColor,
  green,
  txtLight,
  txtMuted,
  txtWhite,
  yellow,
} from "../Colors";

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

interface AllAdminArticleProps {
  articles: AdminArticle[];
  articlesLoading: boolean;
  onStatusChange: (articleId: string, newStatus: string) => void;
}

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

export default function AllAdminArticle({
  articles,
  articlesLoading,
  onStatusChange,
}: AllAdminArticleProps) {
  const [updatingArticleId, setUpdatingArticleId] = useState<string | null>(
    null,
  );

  const formatUploadTime = (article: AdminArticle) => {
    if (!article.createdAt?._seconds) {
      return "";
    }

    const createdTime = article.createdAt._seconds * 1000;
    const currentTime = Date.now();

    const difference = currentTime - createdTime;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes} min ago`;
    }

    if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    if (days < 7) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    return new Date(createdTime).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleStatusChange = async (
    articleId: string,
    event: SelectChangeEvent<string | number>,
  ) => {
    const newStatus = String(event.target.value);

    try {
      setUpdatingArticleId(articleId);

      const response = await fetch(
        `http://localhost:5000/api/articles/${articleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed to update article status:", data);
        return;
      }

      onStatusChange(articleId, newStatus);
    } catch (error) {
      console.error("Update article status error:", error);
    } finally {
      setUpdatingArticleId(null);
    }
  };

  return (
    <Box
      sx={{
        mt: { xs: "28px", md: "40px" },
      }}
    >
      <Typography
        sx={{
          color: txtWhite,
          fontSize: { xs: "18px", md: "22px" },
          fontWeight: 700,
          mb: "6px",
        }}
      >
        Your Articles
      </Typography>

      <Typography
        sx={{
          color: txtMuted,
          fontSize: { xs: "12px", md: "14px" },
          mb: { xs: "18px", md: "24px" },
        }}
      >
        View and manage all draft and published articles.
      </Typography>

      {/* LOADING */}

      {articlesLoading && (
        <Typography
          sx={{
            color: txtMuted,
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Loading articles...
        </Typography>
      )}

      {/* NO ARTICLES */}

      {!articlesLoading && articles.length === 0 && (
        <Typography
          sx={{
            color: txtMuted,
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          No articles found.
        </Typography>
      )}

      {/* ARTICLE GRID */}

      {!articlesLoading && articles.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: "16px", md: "20px" },
          }}
        >
          {articles.map((article) => (
            <CustomContainer
              key={article.id}
              bgcolor={background}
              borderColor={borderColor}
              borderRadius="8px"
              padding="18px"
              height="100%"
              width="100%"
              sx={{
                gap: "12px",
                minWidth: 0,
              }}
            >
              {/* CATEGORY + STATUS */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: Primary,
                    fontSize: { xs: "11px", md: "12px" },
                    fontWeight: 700,
                  }}
                >
                  {article.categoryLabel || article.category || "Article"}
                </Typography>

                <Typography
                  sx={{
                    color: article.status === "published" ? green : yellow,
                    fontSize: { xs: "11px", md: "12px" },
                    fontWeight: 700,
                    textTransform: "capitalize",
                  }}
                >
                  {article.status}
                </Typography>
              </Box>

              {/* TITLE */}

              <Typography
                sx={{
                  color: txtWhite,
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 700,
                  lineHeight: 1.35,
                }}
              >
                {article.title}
              </Typography>

              {/* EXCERPT */}

              <Typography
                sx={{
                  color: txtMuted,
                  fontSize: { xs: "12px", md: "13px" },
                  lineHeight: 1.6,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {article.excerpt || "No excerpt added."}
              </Typography>

              {/* ARTICLE INFO */}

              <Box
                sx={{
                  mt: "auto",
                  pt: "8px",
                  borderTop: `1px solid ${borderColor}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography
                  sx={{
                    color: txtLight,
                    fontSize: { xs: "11px", md: "12px" },
                  }}
                >
                  Author: {article.authorName || "Fenestration Insider"}
                </Typography>

                {formatUploadTime(article) && (
                  <Typography
                    sx={{
                      color: txtMuted,
                      fontSize: { xs: "11px", md: "12px" },
                    }}
                  >
                    Uploaded: {formatUploadTime(article)}
                  </Typography>
                )}

                {article.featured && (
                  <Typography
                    sx={{
                      color: Primary,
                      fontSize: { xs: "11px", md: "12px" },
                      fontWeight: 700,
                    }}
                  >
                    Featured Article
                  </Typography>
                )}
              </Box>

              {/* STATUS DROPDOWN */}

              <CustomDropdown
                id={`article-status-${article.id}`}
                value={article.status || "draft"}
                onChange={(event) => handleStatusChange(article.id, event)}
                options={statusOptions}
                height="44px"
                borderRadius="4px"
                disabled={updatingArticleId === article.id}
                sx={{
                  "& .MuiSelect-select": {
                    color: article.status === "published" ? green : yellow,
                    fontWeight: 700,
                  },
                }}
              />

              {updatingArticleId === article.id && (
                <Typography
                  sx={{
                    color: txtMuted,
                    fontSize: { xs: "10px", md: "11px" },
                    mt: "6px",
                  }}
                >
                  Updating...
                </Typography>
              )}
            </CustomContainer>
          ))}
        </Box>
      )}
    </Box>
  );
}
