import { Box, Typography } from "@mui/material";

import { txtWhite } from "../components/Colors";
import AdminHeader from "../components/admin-comp/AdminHeader";

export default function AdminDashboard() {
  return (
    <AdminHeader>
      <Box
        sx={{
          padding: {
            xs: "18px",
            md: "30px",
          },
        }}
      >
        <Typography
          sx={{
            color: txtWhite,

            fontSize: {
              xs: "22px",
              md: "30px",
            },

            fontWeight: 700,
          }}
        >
          Welcome back, Admin
        </Typography>
      </Box>
    </AdminHeader>
  );
}
