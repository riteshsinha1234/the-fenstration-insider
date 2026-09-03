import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import ArticleOutlined from "@mui/icons-material/ArticleOutlined";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import EnergySavingsLeafOutlined from "@mui/icons-material/EnergySavingsLeafOutlined";
import ScienceOutlined from "@mui/icons-material/ScienceOutlined";
import PersonSearchOutlined from "@mui/icons-material/PersonSearchOutlined";
import ApartmentOutlined from "@mui/icons-material/ApartmentOutlined";
import EventOutlined from "@mui/icons-material/EventOutlined";
import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined";
import UploadOutlined from "@mui/icons-material/UploadOutlined";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import PeopleOutlineOutlined from "@mui/icons-material/PeopleOutlineOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import {
  Primary,
  background,
  borderColor,
  txtLight,
  txtMuted,
  txtWhite,
} from "../Colors";

type SidebarItem = {
  label: string;
  icon: React.ElementType;
  path: string;
};

const menuItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: DashboardOutlined,
    path: "/admin/dashboard",
  },
  {
    label: "Articles & News",
    icon: ArticleOutlined,
    path: "/admin/articles",
  },
  {
    label: "Categories",
    icon: FolderOutlined,
    path: "/admin/categories",
  },
  {
    label: "Case Studies",
    icon: BusinessCenterOutlined,
    path: "/admin/case-studies",
  },
  {
    label: "Sustainability",
    icon: EnergySavingsLeafOutlined,
    path: "/admin/sustainability",
  },
  {
    label: "Façade Lab",
    icon: ScienceOutlined,
    path: "/admin/facade-lab",
  },
  {
    label: "Industry Leaders",
    icon: PersonSearchOutlined,
    path: "/admin/industry-leaders",
  },
  {
    label: "Companies / Directory",
    icon: ApartmentOutlined,
    path: "/admin/companies",
  },
  {
    label: "Events & Expos",
    icon: EventOutlined,
    path: "/admin/events",
  },
  {
    label: "Newsletter",
    icon: MailOutlineOutlined,
    path: "/admin/newsletter",
  },
  {
    label: "User Submissions",
    icon: UploadOutlined,
    path: "/admin/submissions",
  },
  {
    label: "Media Library",
    icon: ImageOutlined,
    path: "/admin/media",
  },
  {
    label: "Users",
    icon: PeopleOutlineOutlined,
    path: "/admin/users",
  },
  {
    label: "Site Settings",
    icon: SettingsOutlined,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: { xs: "220px", md: "265px" },
        backgroundColor: background,
        borderRight: `1px solid ${borderColor}`,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        zIndex: 1200,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: { xs: "90px", md: "102px" },
          display: "flex",
          alignItems: "center",
          px: { xs: "16px", md: "20px" },
          borderBottom: `1px solid ${borderColor}`,
          gap: { xs: "12px", md: "14px" },
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: "34px", md: "42px" },
            height: { xs: "34px", md: "42px" },
            border: `3px solid ${Primary}`,
            transform: "rotate(45deg)",
            position: "relative",
            flexShrink: 0,
            "&::after": {
              content: '""',
              position: "absolute",
              inset: "7px",
              border: `2px solid ${Primary}`,
            },
          }}
        />

        <Box>
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "11px", md: "13px" },
              fontWeight: 800,
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            THE FENESTRATION INSIDER
          </Typography>

          <Typography
            sx={{
              color: Primary,
              fontSize: { xs: "12px", md: "15px" },
              fontWeight: 800,
              mt: "3px",
            }}
          >
            ADMIN PORTAL
          </Typography>
        </Box>
      </Box>

      {/* MENU */}

      <Box
        sx={{
          py: { xs: "14px", md: "16px" },
          flex: 1,
        }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.path ||
            (item.path !== "/admin/dashboard" &&
              pathname.startsWith(item.path));
          return (
            <Box
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: { xs: "12px", md: "14px" },
                px: { xs: "16px", md: "20px" },
                py: { xs: "10px", md: "12px" },
                mx: { xs: "5px", md: "7px" },
                mb: "2px",
                borderRadius: "4px",
                cursor: "pointer",
                color: active ? txtWhite : txtLight,
                background: active
                  ? "linear-gradient(90deg, rgba(255,131,1,0.55), rgba(255,131,1,0.25))"
                  : "transparent",
                transition: "all 0.2s ease",
                "&::before": active
                  ? {
                      content: '""',
                      position: "absolute",
                      left: "-7px",
                      top: 0,
                      bottom: 0,
                      width: "4px",
                      backgroundColor: Primary,
                    }
                  : {},

                "&:hover": {
                  backgroundColor: active
                    ? undefined
                    : "rgba(255,255,255,0.04)",
                },
              }}
            >
              <Icon
                sx={{
                  fontSize: { xs: "20px", md: "22px" },
                  color: active ? Primary : txtMuted,
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: active ? 600 : 500,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* ADMIN PROFILE */}

      <Box
        sx={{
          borderTop: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
          px: { xs: "16px", md: "20px" },
          py: { xs: "15px", md: "18px" },
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: "42px", md: "48px" },
            height: { xs: "42px", md: "48px" },
            borderRadius: "50%",
            border: `2px solid ${Primary}`,
            background: "linear-gradient(135deg, #31436A 0%, #8A4B19 100%)",
            color: txtWhite,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          AD
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 600,
            }}
          >
            Administrator
          </Typography>
          <Typography
            sx={{
              color: txtMuted,
              fontSize: { xs: "10px", md: "12px" },
            }}
          >
            Super Admin
          </Typography>
        </Box>

        <KeyboardArrowDown sx={{ color: txtLight, fontSize: "22px" }} />
      </Box>

      {/* LOGOUT */}

      <Box
        sx={{
          px: { xs: "16px", md: "20px" },
          py: { xs: "18px", md: "22px" },
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          flexShrink: 0,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.03)",
          },
        }}
      >
        <LogoutOutlined
          sx={{
            color: txtLight,
            fontSize: { xs: "22px", md: "26px" },
          }}
        />
        <Typography
          sx={{
            color: txtWhite,
            fontSize: { xs: "13px", md: "15px" },

            fontWeight: 600,
          }}
        >
          Logout
        </Typography>
      </Box>
    </Box>
  );
}
