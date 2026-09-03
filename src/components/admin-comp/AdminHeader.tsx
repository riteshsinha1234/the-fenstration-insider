import { Box, IconButton, Typography } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
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

export default function AdminHeader() {
  return (
    <Box
      sx={{
        height: { xs: "90px", md: "102px" },
        width: "100%",
        backgroundColor: background,
        borderBottom: `1px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: "18px", md: "38px" },
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      <Box>
        <Typography
          sx={{
            color: txtWhite,
            fontSize: { xs: "18px", md: "25px" },
            fontWeight: 700,
          }}
        >
          Admin Dashboard
        </Typography>

        <Typography
          sx={{
            color: txtMuted,
            fontSize: { xs: "10px", md: "13px" },
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
          gap: { xs: "10px", md: "18px" },
        }}
      >
        {/* SEARCH */}

        <Box
          sx={{
            width: { xs: "180px", md: "335px" },
            height: { xs: "42px", md: "52px" },
            border: `1px solid ${borderColor}`,
            borderRadius: "6px",
            backgroundColor: inputBackground,
            display: "flex",
            alignItems: "center",
            px: { xs: "12px", md: "16px" },
            gap: "10px",
            boxSizing: "border-box",
          }}
        >
          <SearchOutlined
            sx={{
              color: txtMuted,
              fontSize: { xs: "20px", md: "24px" },
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
              fontSize: { xs: "11px", md: "13px" },
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
              width: { xs: "42px", md: "50px" },
              height: { xs: "42px", md: "50px" },
              border: `1px solid ${borderColor}`,
              borderRadius: "6px",
              color: txtWhite,
            }}
          >
            <NotificationsNoneOutlined />
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              top: "-7px",
              right: "-7px",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              backgroundColor: red,
              color: txtWhite,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            8
          </Box>
        </Box>

        {/* VIEW WEBSITE */}

        <Box
          onClick={() => {
            window.location.href = "/";
          }}
          sx={{
            height: { xs: "42px", md: "50px" },
            px: { xs: "12px", md: "20px" },
            border: `1px solid ${Primary}`,
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255,131,1,0.08)",
            },
          }}
        >
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "11px", md: "13px" },
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            View Website
          </Typography>

          <OpenInNewOutlined
            sx={{
              color: txtWhite,
              fontSize: "18px",
            }}
          />
        </Box>

        {/* ADMIN */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: { xs: "40px", md: "48px" },
              height: { xs: "40px", md: "48px" },
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
                fontSize: { xs: "24px", md: "28px" },
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography
              sx={{
                color: txtWhite,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Administrator
            </Typography>
            <Typography
              sx={{
                color: txtMuted,

                fontSize: "12px",
              }}
            >
              Super Admin
            </Typography>
          </Box>
          <KeyboardArrowDown
            sx={{
              color: txtLight,
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
