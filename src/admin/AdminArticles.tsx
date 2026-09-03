import { Box, Typography } from "@mui/material";

import { background, txtWhite } from "../components/Colors";
import AdminSidebar from "../components/admin-comp/AdminSidebar";
import AdminHeader from "../components/admin-comp/AdminHeader";

export default function AdminArticles() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: background,
      }}
    >
      <AdminSidebar />

      <Box
        sx={{
          marginLeft: { xs: "220px", md: "265px" },
          minHeight: "100vh",
          backgroundColor: background,
        }}
      >
        <AdminHeader />
        <Box
          sx={{
            padding: { xs: "18px", md: "30px" },
          }}
        >
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: 700,
            }}
          >
            Articles & News
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
