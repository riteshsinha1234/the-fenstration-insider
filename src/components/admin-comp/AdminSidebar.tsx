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

import {
  Primary,
  Secondary,
  background,
  borderColor,
  orangeGlow,
  red,
  txtLight,
  txtMuted,
  txtWhite,
  white,
} from "../Colors";
import CustomButton from "../CustomButton";
import { useState } from "react";
import AdminDialog from "./AdminDialog";

import { auth } from "@/backend/src/firebase";
import { signOut } from "firebase/auth";

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
    label: "Facade Lab",
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
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);

      await signOut(auth);

      setLogoutDialogOpen(false);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLogoutLoading(false);
    }
  };

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
        width: { xs: "200px", md: "240px" },
        backgroundColor: background,
        borderRight: `1px solid ${borderColor}`,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, Edge
        },
        zIndex: 1200,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: { xs: "60px", md: "70px" },
          display: "flex",
          alignItems: "center",
          px: { xs: "16px", md: "16px" },
          borderBottom: `1px solid ${borderColor}`,
          gap: { xs: "12px", md: "14px" },
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: "20px", md: "25px" },
            height: { xs: "20px", md: "25px" },
            border: `3px solid ${Primary}`,
            transform: "rotate(45deg)",
            position: "relative",
            flexShrink: 0,
            "&::after": {
              content: '""',
              position: "absolute",
              inset: { xs: "3.5px", md: "7px" },
              border: `2px solid ${Primary}`,
            },
          }}
        />

        <Box>
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "8px", md: "10px" },
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
              fontSize: { xs: "10px", md: "12px" },
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
                  backgroundColor: active ? undefined : orangeGlow,
                },
              }}
            >
              <Icon
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
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

      {/* LOGOUT */}
      <CustomButton
        text="Logout"
        icon={<LogoutOutlined />}
        onClick={() => setLogoutDialogOpen(true)}
        bgColor={Secondary}
        textColor={white}
        borderColor={orangeGlow}
        width="calc(100% - 28px)"
        height="38px"
        borderRadius="6px"
        fontWeight={700}
        iconSize="20px"
        sx={{
          mx: "14px",
          mb: "20px",
          px: { xs: "16px", md: "20px" },
          justifyContent: "center",
          fontSize: { xs: "12px", md: "16px" },
          gap: "10px",
          boxShadow: "0 4px 14px rgba(211, 47, 47, 0.18)",
          "& .MuiButton-startIcon": {
            marginLeft: 0,
            marginRight: 0,
          },
          "&:hover": {
            boxShadow: "0 5px 18px rgba(211, 47, 47, 0.28)",
          },
        }}
      />
      <AdminDialog
        open={logoutDialogOpen}
        loading={logoutLoading}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogout}
      />
    </Box>
  );
}
