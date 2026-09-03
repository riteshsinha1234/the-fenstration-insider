import type { ReactNode } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import AdminSidebar from "./AdminSidebar";

import {
  Primary,
  background,
  borderColor,
  inputBackground,
  red,
  txtLight,
  txtMuted,
  txtWhite,
} from "../Colors";

interface AdminHeaderProps {
  children?: ReactNode;
}

export default function AdminHeader({ children }: AdminHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: background,
      }}
    >
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* RIGHT SIDE */}
      <Box
        sx={{
          marginLeft: { xs: "200px", md: "240px" },
          width: { xs: "calc(100% - 200px)", md: "calc(100% - 240px)" },
          minHeight: "100vh",
          backgroundColor: background,
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            height: { xs: "60px", md: "70px" },
            width: "100%",
            backgroundColor: background,
            borderBottom: `1px solid ${borderColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: "12px", md: "16px" },
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          {/* LEFT */}

          <Box>
            <Typography
              sx={{
                color: txtWhite,
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: 700,
              }}
            >
              Admin Dashboard
            </Typography>

            <Typography
              sx={{
                color: txtMuted,
                fontSize: { xs: "8px", md: "10px" },
                mt: "3px",
              }}
            >
              Fenestration Insider Content & Platform Management
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", md: "12px" },
            }}
          >
            {/* SEARCH */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: { xs: "0px", md: "200px" },
                height: { xs: "0px", md: "35px" },
                border: `1px solid ${borderColor}`,
                borderRadius: "6px",
                backgroundColor: inputBackground,
                alignItems: "center",
                px: "16px",
                gap: "10px",
                boxSizing: "border-box",
              }}
            >
              <SearchOutlined
                sx={{
                  color: txtMuted,
                  fontSize: "16px",
                }}
              />

              <Box
                component="input"
                placeholder="Search content, users, etc..."
                sx={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: txtLight,
                  fontSize: "12px",

                  "&::placeholder": {
                    color: txtMuted,
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* NOTIFICATION */}
            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  width: { xs: "25px", md: "35px" },
                  height: { xs: "25px", md: "35px" },
                  border: `1px solid ${borderColor}`,
                  borderRadius: "6px",
                  color: txtWhite,
                }}
              >
                <NotificationsNoneOutlined
                  sx={{
                    color: txtWhite,
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                />
              </IconButton>

              {/* NOTIFICATION COUNT */}

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-3px", md: "-7px" },
                  right: { xs: "-3px", md: "-7px" },
                  width: { xs: "12px", md: "16px" },
                  height: { xs: "12px", md: "16px" },
                  borderRadius: "50%",
                  backgroundColor: red,
                  color: txtWhite,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: "8px", md: "10px" },
                  fontWeight: 700,
                }}
              >
                0
              </Box>
            </Box>

            {/* VIEW WEBSITE */}
            <Box
              onClick={() => {
                window.location.href = "/";
              }}
              sx={{
                display: { xs: "none", md: "flex" },
                height: "35px",
                px: "10px",
                border: `1px solid ${Primary}`,
                borderRadius: "6px",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  color: txtWhite,
                  fontSize: "12px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                View Website
              </Typography>

              <OpenInNewOutlined
                sx={{
                  color: txtWhite,
                  fontSize: { xs: "12px", md: "16px" },
                }}
              />
            </Box>

            {/* ADMIN */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "4px", md: "8px" },
              }}
            >
              {/* ADMIN ICON */}

              <Box
                sx={{
                  width: { xs: "25px", md: "30px" },
                  height: { xs: "25px", md: "30px" },
                  borderRadius: "50%",
                  border: `1px solid ${borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonOutlined
                  sx={{
                    color: txtWhite,
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                />
              </Box>

              {/* ADMIN INFO */}
              <Box>
                <Typography
                  sx={{
                    color: txtWhite,
                    fontSize: { xs: "8px", md: "10px" },
                    fontWeight: 600,
                  }}
                >
                  Administrator
                </Typography>

                <Typography
                  sx={{
                    color: txtMuted,
                    fontSize: { xs: "8px", md: "10px" },
                  }}
                >
                  Super Admin
                </Typography>
              </Box>

              <KeyboardArrowDown
                sx={{
                  color: txtLight,
                  fontSize: { xs: "10px", md: "12px" },
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* PAGE CONTENT */}
        <Box
          component="main"
          sx={{
            width: "100%",
            minHeight: { xs: "calc(100vh - 60px)", md: "calc(100vh - 70px)" },
            boxSizing: "border-box",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
