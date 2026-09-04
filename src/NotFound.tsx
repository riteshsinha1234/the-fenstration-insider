import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  Primary,
  background,
  orangeGlow,
  txtMuted,
  txtWhite,
} from "./components/Colors";
import CustomButton from "./components/CustomButton";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "30px" },
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",

        "@keyframes fadeUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(25px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes float404": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        "@keyframes glow": {
          "0%, 100%": {
            opacity: 0.35,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            opacity: 0.7,
            transform: "translate(-50%, -50%) scale(1.15)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *": {
            animation: "none !important",
            transition: "none !important",
          },
        },
      }}
    >
      {/* BACKGROUND GLOW */}

      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          width: { xs: "280px", md: "450px" },
          height: { xs: "280px", md: "450px" },
          borderRadius: "50%",
          backgroundColor: orangeGlow,
          filter: "blur(90px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          animation: "glow 4s ease-in-out infinite",
        }}
      />

      {/* CONTENT */}

      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          animation: "fadeUp 0.7s ease-out",
        }}
      >
        {/* 404 */}

        <Typography
          sx={{
            color: Primary,
            fontSize: { xs: "80px", md: "140px" },
            fontWeight: 900,
            lineHeight: 1,
            textShadow: `0 0 35px ${orangeGlow}`,
            animation: "float404 3s ease-in-out infinite",
          }}
        >
          404
        </Typography>

        {/* TITLE */}

        <Typography
          sx={{
            color: txtWhite,
            fontSize: { xs: "22px", md: "32px" },
            fontWeight: 700,
            mt: "12px",
          }}
        >
          Page Not Found
        </Typography>

        {/* DESCRIPTION */}

        <Typography
          sx={{
            color: txtMuted,
            fontSize: { xs: "13px", md: "15px" },
            lineHeight: 1.7,
            mt: "10px",
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
        </Typography>

        {/* BUTTON */}
        <CustomButton
          text="BACK TO HOME"
          onClick={() => navigate("/")}
          bgColor={Primary}
          textColor={background}
          borderColor={Primary}
          height="48px"
          borderRadius="4px"
          fontWeight={800}
          sx={{
            width: { xs: "30%", md: "180px" },
            fontSize: { xs: "12px", md: "16px" },
            mt: "28px",
            transition:
              "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
            "&:hover": {
              opacity: 0.95,
              transform: "translateY(-3px)",
              boxShadow: `0 8px 25px ${orangeGlow}`,
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        />
      </Box>
    </Box>
  );
}
