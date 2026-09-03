import { Box, Typography } from "@mui/material";

import AdminHeader from "../components/admin-comp/AdminHeader";
import { txtWhite } from "../components/Colors";

export default function AdminIndustryLeaders() {
  return (
    <AdminHeader>
      <Box sx={{ padding: { xs: "18px", md: "30px" } }}>
        <Typography
          sx={{
            color: txtWhite,
            fontSize: { xs: "22px", md: "30px" },
            fontWeight: 700,
          }}
        >
          Industry Leaders
        </Typography>
      </Box>
    </AdminHeader>
  );
}
