import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Divider, Typography } from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import CustomTextField from "../components/CustomTextField";
import CustomContainer from "../components/CustomContainer";

import {
  Primary,
  Secondary,
  background,
  borderColor,
  blue,
  txtLight,
  txtMuted,
  txtWhite,
  overlay,
  red,
  loginGry,
} from "../components/Colors";
import { auth } from "../config/firebase";
import { API_BASE_URL } from "../config/api";
import ImageButton from "../components/ImageButton";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"email" | "password">("email");
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // CONTINUE AFTER EMAIL
  const handleContinue = () => {
    if (!email.trim()) {
      setError("Please enter your admin email.");
      return;
    }

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStep("password");
  };

  // CHANGE EMAIL
  const handleChangeEmail = () => {
    setStep("email");
    setPassword("");
    setError("");
  };

  // LOGIN
  const handleLogin = async () => {
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );

      const token = await userCredential.user.getIdToken();

      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const contentType = response.headers.get("content-type");

      const data = contentType?.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        await auth.signOut();

        console.error("Admin verification failed:", {
          status: response.status,
          message: data.message,
        });

        setError(data.message || "Unable to verify admin account.");
        return;
      }
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      console.error("Admin login error:", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomContainer
      padding={0}
      borderColor="transparent"
      borderRadius={0}
      height="auto"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(
            circle at 50% 45%,
            rgba(14, 53, 89, 0.28) 0%,
            rgba(0, 14, 32, 0.08) 42%,
            rgba(0, 14, 32, 0.85) 100%
          ),
          ${background}
        `,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* LOGO AND BRAND */}

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { xs: "20px", md: "30px" },
          left: { xs: "20px", md: "30px" },
          zIndex: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: "12px", md: "16px" },
          width: "fit-content",
          textAlign: "left",
        }}
      >
        {/* LOGO MARK */}

        <Box
          sx={{
            width: { xs: "25px", md: "30px" },
            height: { xs: "25px", md: "30px" },
            position: "relative",
            flexShrink: 0,
            transform: "rotate(45deg)",
            border: { xs: `4px solid ${Primary}`, md: `5px solid ${Primary}` },
            boxSizing: "border-box",

            "&::after": {
              content: '""',
              position: "absolute",
              inset: { xs: "4px", md: "5px" },
              border: {
                xs: `2px solid ${Primary}`,
                md: `3px solid ${Primary}`,
              },
            },
          }}
        />

        {/* BRAND TEXT */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 800,
              letterSpacing: "0.4px",
              lineHeight: 1.12,
              textAlign: "left",
            }}
          >
            THE FENESTRATION
            <br />
            INSIDER
          </Typography>

          <Typography
            sx={{
              mt: { xs: "4px", md: "8px" },
              color: txtLight,
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 700,
              letterSpacing: { xs: "1.2px", md: "1.8px" },
              textAlign: "left",
            }}
          >
            ADMINISTRATION PORTAL
          </Typography>
        </Box>
      </Box>

      {/* LOGIN BLOCK */}

      <CustomContainer
        padding={0}
        bgcolor="transparent"
        borderColor="transparent"
        borderRadius={0}
        height="auto"
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: "16px", md: "30px" },
          pt: { xs: "50px", md: "80px" },
          pb: { xs: "120px", md: "110px" },
        }}
      >
        {/* LOGIN CARD */}

        <CustomContainer
          padding={0}
          bgcolor="transparent"
          borderColor={borderColor}
          borderRadius="5px"
          height="auto"
          shadow="0 20px 70px rgba(0,0,0,0.16)"
          sx={{
            width: "100%",
            maxWidth: { xs: "500px", md: "600px" },
            background: overlay,
            backdropFilter: "blur(6px)",
            px: { xs: "22px", md: "42px" },
            py: { xs: "30px", md: "40px" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* SECURE ADMIN ACCESS */}

          <Typography
            variant="body1"
            sx={{
              color: Primary,
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 800,
              letterSpacing: "0.4px",
              textAlign: "center",
            }}
          >
            SECURE ADMIN ACCESS
          </Typography>

          {/* ORANGE LINE */}

          <Typography
            component="span"
            sx={{
              display: "block",
              width: "48px",
              height: "2px",
              backgroundColor: Primary,
              mt: "10px",
            }}
          />

          {/* TITLE */}

          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: 800,
              lineHeight: 1.15,
              textAlign: "center",
              mt: { xs: "15px", md: "20px" },
            }}
          >
            Welcome Back
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              color: txtLight,
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 400,
              textAlign: "center",
              mt: "10px",
              mb: { xs: "15px", md: "20px" },
            }}
          >
            {step === "email"
              ? "Sign in to manage The Fenestration Insider platform."
              : "Enter your password to continue to the admin portal."}
          </Typography>

          {/* STEP 1 - EMAIL */}

          {step === "email" && (
            <>
              <CustomContainer
                padding={0}
                bgcolor="transparent"
                borderColor="transparent"
                borderRadius={0}
                height="auto"
                width="100%"
                sx={{
                  alignItems: "stretch",
                }}
              >
                <Typography
                  component="label"
                  htmlFor="admin-email"
                  sx={{
                    color: txtWhite,
                    fontSize: { xs: "12px", md: "14px" },
                    fontWeight: 600,
                    mb: { xs: "4px", md: "8px" },
                    textAlign: "left",
                  }}
                >
                  Admin Email
                </Typography>

                <CustomTextField
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  placeholder="Enter admin email"
                  autoComplete="email"
                  limit={100}
                  height="48px"
                  borderRadius="4px"
                  startIcon={
                    <EmailOutlined
                      sx={{
                        fontSize: "20px",
                        color: txtMuted,
                      }}
                    />
                  }
                />
              </CustomContainer>

              {/* EMAIL ERROR */}

              {error && (
                <Typography
                  sx={{
                    width: "100%",
                    color: red,
                    fontSize: "12px",
                    textAlign: "center",
                    mt: "10px",
                    fontWeight: 500,
                  }}
                >
                  {error}
                </Typography>
              )}

              {/* CONTINUE BUTTON */}

              <ImageButton
                text="CONTINUE"
                icon={<ArrowForward sx={{ fontSize: "22px" }} />}
                position="right"
                onClick={handleContinue}
                disabled={!isValidEmail}
                bgColor={isValidEmail ? Primary : loginGry}
                hoverColor={isValidEmail ? Secondary : loginGry}
                textColor={isValidEmail ? background : txtMuted}
                borderColor={isValidEmail ? Primary : loginGry}
                height="48px"
                width="100%"
                borderRadius="4px"
                fontSize="16px"
                fontWeight={800}
                gap="8px"
                sx={{
                  mt: "20px",
                  letterSpacing: "0.25px",
                  "&.Mui-disabled": {
                    backgroundColor: loginGry,
                    color: txtMuted,
                    borderColor: loginGry,
                    opacity: 1,
                  },
                  "&:hover": {
                    transform: isValidEmail ? "translateY(-1px)" : "none",
                  },
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              />
            </>
          )}

          {/* STEP 2 - PASSWORD */}

          {step === "password" && (
            <>
              {/* CURRENT EMAIL */}

              <CustomContainer
                padding={0}
                bgcolor="transparent"
                borderColor="transparent"
                borderRadius={0}
                height="auto"
                width="100%"
                flexDirection="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "16px",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: txtLight,
                    fontSize: { xs: "10px", md: "12px" },
                    textAlign: "left",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {email}
                </Typography>

                <Typography
                  component="button"
                  type="button"
                  onClick={handleChangeEmail}
                  sx={{
                    appearance: "none",
                    border: 0,
                    outline: 0,
                    p: 0,
                    background: "transparent",
                    color: Primary,
                    fontSize: { xs: "10px", md: "12px" },
                    fontWeight: 600,
                    cursor: "pointer",
                    flexShrink: 0,

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Change
                </Typography>
              </CustomContainer>

              {/* PASSWORD FIELD */}

              <CustomContainer
                padding={0}
                bgcolor="transparent"
                borderColor="transparent"
                borderRadius={0}
                height="auto"
                width="100%"
                sx={{
                  alignItems: "stretch",
                }}
              >
                <Typography
                  component="label"
                  htmlFor="admin-password"
                  sx={{
                    color: txtWhite,
                    fontSize: { xs: "12px", md: "14px" },
                    fontWeight: 600,
                    mb: { xs: "4px", md: "8px" },
                    textAlign: "left",
                  }}
                >
                  Password
                </Typography>

                <CustomTextField
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  limit={100}
                  height="48px"
                  borderRadius="4px"
                  startIcon={
                    <LockOutlined
                      sx={{
                        fontSize: "20px",
                        color: txtMuted,
                      }}
                    />
                  }
                />
              </CustomContainer>

              {/* FORGOT PASSWORD */}

              <CustomContainer
                padding={0}
                bgcolor="transparent"
                borderColor="transparent"
                borderRadius={0}
                height="auto"
                width="100%"
                flexDirection="row"
                sx={{
                  justifyContent: "flex-end",
                  mt: "10px",
                }}
              >
                <Typography
                  component="button"
                  type="button"
                  sx={{
                    appearance: "none",
                    border: 0,
                    outline: 0,
                    p: 0,
                    background: "transparent",
                    color: blue,
                    fontSize: { xs: "12px", md: "14px" },
                    cursor: "pointer",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot password?
                </Typography>
              </CustomContainer>

              {/* LOGIN ERROR */}

              {error && (
                <Typography
                  sx={{
                    width: "100%",
                    color: red,
                    fontSize: "12px",
                    textAlign: "center",
                    mt: "10px",
                    fontWeight: 500,
                  }}
                >
                  {error}
                </Typography>
              )}

              {/* LOGIN BUTTON */}
              <ImageButton
                text={loading ? "SIGNING IN..." : "SIGN IN TO ADMIN PORTAL"}
                icon={<ArrowForward sx={{ fontSize: "22px" }} />}
                position="right"
                onClick={handleLogin}
                disabled={loading || !password.trim()}
                bgColor={password.trim() ? Primary : loginGry}
                hoverColor={password.trim() ? Secondary : loginGry}
                textColor={password.trim() ? background : txtMuted}
                borderColor={password.trim() ? Primary : loginGry}
                height="48px"
                width="100%"
                borderRadius="4px"
                fontSize="16px"
                fontWeight={800}
                gap="8px"
                sx={{
                  mt: "10px",
                  letterSpacing: "0.25px",
                  "&.Mui-disabled": {
                    backgroundColor: password.trim() ? Primary : loginGry,
                    color: password.trim() ? background : txtMuted,
                    borderColor: password.trim() ? Primary : loginGry,
                    opacity: 1,
                  },
                  "&:hover": {
                    transform:
                      password.trim() && !loading ? "translateY(-1px)" : "none",
                  },
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              />
            </>
          )}

          {/* SECURITY DIVIDER */}

          <CustomContainer
            padding={0}
            bgcolor="transparent"
            borderColor="transparent"
            borderRadius={0}
            height="auto"
            width="100%"
            flexDirection="row"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              mt: { xs: "28px", md: "34px" },
            }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor,
              }}
            />

            <AdminPanelSettingsOutlined
              sx={{
                color: Primary,
                fontSize: "34px",
                flexShrink: 0,
              }}
            />

            <Divider
              sx={{
                flex: 1,
                borderColor,
              }}
            />
          </CustomContainer>

          {/* SECURITY TEXT */}

          <Typography
            sx={{
              color: txtWhite,
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 700,
              textAlign: "center",
              mt: { xs: "5px", md: "10px" },
            }}
          >
            Authorized administrators only
          </Typography>

          <Typography
            sx={{
              color: txtLight,
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 400,
              textAlign: "center",
              mt: "4px",
            }}
          >
            Access to this system is monitored and restricted.
          </Typography>
        </CustomContainer>
      </CustomContainer>

      {/* FOOTER */}

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          bottom: { xs: "19px", md: "16px" },
          left: { xs: "auto", md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },
          zIndex: 5,
          width: { xs: "calc(100% - 32px)", md: "620px" },
          mx: { xs: "16px", md: 0 },
        }}
      >
        <Divider
          sx={{
            borderColor: "rgba(65,83,106,0.55)",
            mb: "18px",
          }}
        />

        <Typography
          sx={{
            color: txtLight,
            fontSize: { xs: "10px", md: "12px" },
            textAlign: "center",
            mb: { xs: "4px", md: "8px" },
          }}
        >
          © 2026 The Fenestration Insider
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: "8px", md: "12px" },
          }}
        >
          <Typography
            sx={{
              color: txtMuted,
              fontSize: { xs: "10px", md: "12px" },
              cursor: "pointer",

              "&:hover": {
                color: txtLight,
              },
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            sx={{
              color: Primary,
              fontSize: "12px",
            }}
          >
            •
          </Typography>

          <Typography
            sx={{
              color: txtMuted,
              fontSize: { xs: "10px", md: "12px" },
              cursor: "pointer",

              "&:hover": {
                color: txtLight,
              },
            }}
          >
            Terms & Conditions
          </Typography>

          <Typography
            sx={{
              color: Primary,
              fontSize: "12px",
            }}
          >
            •
          </Typography>

          <Typography
            sx={{
              color: txtMuted,
              fontSize: { xs: "10px", md: "12px" },
              cursor: "pointer",

              "&:hover": {
                color: txtLight,
              },
            }}
          >
            Back to Website
          </Typography>
        </Box>
      </Box>
    </CustomContainer>
  );
}
