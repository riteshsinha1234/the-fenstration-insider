import { Box, Typography } from "@mui/material";

import { background, txtWhite } from "../components/Colors";
import AdminSidebar from "../components/admin-comp/AdminSidebar";
import AdminHeader from "../components/admin-comp/AdminHeader";

export default function AdminMediaLibrary() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: background,
      }}
    >
      <AdminSidebar />

      {/* RIGHT SIDE */}
      <Box
        sx={{
          marginLeft: { xs: "200px", md: "240px" },
          minHeight: "100vh",
          backgroundColor: background,
        }}
      >
        {/* HEADER */}
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
            Media Library
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
