import { useState, type FormEvent } from "react";

import { Box, Divider, Typography } from "@mui/material";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";

import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";

import {
  Primary,
  Secondary,
  background,
  borderColor,
  blue,
  cardBackground,
  txtLight,
  txtMuted,
  txtWhite,
} from "../components/Colors";

export default function AdminLogin() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your admin email.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      /*
        Add your backend login API here later.

        Example:

        const response = await fetch(
          "http://localhost:5000/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.trim(),
              password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }
      */

      console.log("Admin login:", {
        email,
        password,
      });
    } catch {
      setError("Invalid admin email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
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
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "absolute",

          inset: 0,

          pointerEvents: "none",

          opacity: 0.32,

          backgroundImage: `
            linear-gradient(
              rgba(65, 83, 106, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(65, 83, 106, 0.08) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "50px 50px",

          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 90%)",
        }}
      />

      {/* LEFT DECORATIVE DIAMOND */}

      <Box
        sx={{
          position: "absolute",

          left: {
            xs: "-130px",
            md: "-40px",
          },

          top: {
            xs: "240px",
            md: "180px",
          },

          width: {
            xs: "300px",
            md: "380px",
          },

          height: {
            xs: "300px",
            md: "380px",
          },

          transform: "rotate(45deg)",

          border: "28px solid rgba(50, 73, 99, 0.13)",

          boxSizing: "border-box",

          pointerEvents: "none",

          "&::after": {
            content: '""',

            position: "absolute",

            inset: "48px",

            border: "20px solid rgba(50, 73, 99, 0.12)",
          },
        }}
      />

      {/* ================================================= */}
      {/* HEADER / BRAND */}
      {/* ================================================= */}

      <Box
        sx={{
          position: {
            xs: "relative",
            md: "absolute",
          },

          top: {
            xs: "22px",
            md: "32px",
          },

          left: {
            xs: "22px",
            md: "34px",
          },

          zIndex: 5,

          display: "flex",

          alignItems: "flex-start",

          gap: {
            xs: "14px",
            md: "18px",
          },

          width: "fit-content",
        }}
      >
        {/* LOGO MARK */}

        <Box
          sx={{
            width: {
              xs: "44px",
              md: "56px",
            },

            height: {
              xs: "44px",
              md: "56px",
            },

            position: "relative",

            flexShrink: 0,

            transform: "rotate(45deg)",

            border: {
              xs: `4px solid ${Primary}`,
              md: `5px solid ${Primary}`,
            },

            boxSizing: "border-box",

            "&::after": {
              content: '""',

              position: "absolute",

              inset: {
                xs: "8px",
                md: "10px",
              },

              border: {
                xs: `3px solid ${Primary}`,
                md: `4px solid ${Primary}`,
              },
            },
          }}
        />

        <Box>
          <Typography
            sx={{
              color: txtWhite,

              fontSize: {
                xs: "18px",
                md: "25px",
              },

              fontWeight: 800,

              letterSpacing: "0.4px",

              lineHeight: 1.12,
            }}
          >
            THE FENESTRATION
            <br />
            INSIDER
          </Typography>

          <Typography
            sx={{
              mt: "8px",

              color: "#839AC0",

              fontSize: {
                xs: "11px",
                md: "15px",
              },

              fontWeight: 700,

              letterSpacing: {
                xs: "1.2px",
                md: "1.8px",
              },
            }}
          >
            ADMINISTRATION PORTAL
          </Typography>
        </Box>
      </Box>

      {/* ================================================= */}
      {/* CENTER CONTENT */}
      {/* ================================================= */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          flex: 1,

          width: "100%",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          boxSizing: "border-box",

          px: {
            xs: "16px",
            sm: "24px",
            md: "30px",
          },

          pt: {
            xs: "110px",
            md: "70px",
          },

          pb: {
            xs: "120px",
            md: "110px",
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: "100%",

            maxWidth: "620px",

            background:
              "linear-gradient(180deg, rgba(7,25,45,0.78) 0%, rgba(3,20,38,0.82) 100%)",

            backdropFilter: "blur(6px)",

            border: `1px solid ${borderColor}`,

            borderRadius: "5px",

            px: {
              xs: "22px",
              sm: "36px",
              md: "42px",
            },

            py: {
              xs: "30px",
              sm: "38px",
              md: "40px",
            },

            boxSizing: "border-box",

            boxShadow: "0 20px 70px rgba(0,0,0,0.16)",
          }}
        >
          {/* SECURE ADMIN ACCESS */}

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              mb: "16px",
            }}
          >
            <Typography
              sx={{
                color: Primary,

                fontSize: {
                  xs: "11px",
                  md: "13px",
                },

                fontWeight: 800,

                letterSpacing: "0.4px",
              }}
            >
              SECURE ADMIN ACCESS
            </Typography>

            <Box
              sx={{
                width: "52px",

                height: "2px",

                backgroundColor: Primary,

                mt: "10px",
              }}
            />
          </Box>

          {/* TITLE */}

          <Typography
            sx={{
              color: txtWhite,

              fontSize: {
                xs: "30px",
                sm: "35px",
                md: "39px",
              },

              fontWeight: 800,

              lineHeight: 1.15,

              textAlign: "center",
            }}
          >
            Welcome Back
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              color: txtLight,

              fontSize: {
                xs: "13px",
                md: "16px",
              },

              fontWeight: 400,

              textAlign: "center",

              mt: "10px",

              mb: {
                xs: "30px",
                md: "38px",
              },
            }}
          >
            Sign in to manage The Fenestration Insider platform.
          </Typography>

          {/* EMAIL */}

          <Typography
            component="label"
            htmlFor="admin-email"
            sx={{
              display: "block",

              color: txtWhite,

              fontSize: {
                xs: "13px",
                md: "14px",
              },

              fontWeight: 600,

              mb: "8px",
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
            height="52px"
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

          {/* PASSWORD */}

          <Typography
            component="label"
            htmlFor="admin-password"
            sx={{
              display: "block",

              color: txtWhite,

              fontSize: {
                xs: "13px",
                md: "14px",
              },

              fontWeight: 600,

              mt: "20px",

              mb: "8px",
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
            height="52px"
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

          {/* FORGOT PASSWORD */}

          <Box
            sx={{
              display: "flex",

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

                padding: 0,

                background: "transparent",

                color: blue,

                fontSize: {
                  xs: "12px",
                  md: "14px",
                },

                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          {/* ERROR */}

          {error && (
            <Typography
              sx={{
                color: "#FF6464",

                fontSize: "12px",

                textAlign: "center",

                mt: "12px",

                fontWeight: 500,
              }}
            >
              {error}
            </Typography>
          )}

          {/* LOGIN BUTTON */}

          <CustomButton
            text={loading ? "SIGNING IN..." : "SIGN IN TO ADMIN PORTAL"}
            icon={
              !loading ? (
                <ArrowForward
                  sx={{
                    fontSize: "22px",
                  }}
                />
              ) : null
            }
            bgColor={Primary}
            hoverColor={Secondary}
            textColor={background}
            borderColor={Primary}
            height="58px"
            borderRadius="4px"
            fontSize="16px"
            fontWeight={800}
            disabled={loading}
            type="submit"
            sx={{
              mt: "20px",

              letterSpacing: "0.25px",

              flexDirection: "row-reverse",

              gap: "8px",

              "& .MuiButton-startIcon": {
                marginLeft: 0,
                marginRight: 0,
              },

              "&:hover": {
                transform: "translateY(-1px)",
              },

              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
          />

          {/* ADMIN SECURITY SECTION */}

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: "14px",

              mt: {
                xs: "28px",
                md: "34px",
              },
            }}
          >
            <Divider
              sx={{
                flex: 1,

                borderColor,
              }}
            />

            <Box
              sx={{
                width: "36px",

                height: "40px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: Primary,
              }}
            >
              <AdminPanelSettingsOutlined
                sx={{
                  fontSize: "34px",
                }}
              />
            </Box>

            <Divider
              sx={{
                flex: 1,

                borderColor,
              }}
            />
          </Box>

          <Typography
            sx={{
              color: txtWhite,

              fontSize: {
                xs: "14px",
                md: "16px",
              },

              fontWeight: 700,

              textAlign: "center",

              mt: "10px",
            }}
          >
            Authorized administrators only
          </Typography>

          <Typography
            sx={{
              color: txtLight,

              fontSize: {
                xs: "11px",
                md: "13px",
              },

              fontWeight: 400,

              textAlign: "center",

              mt: "4px",
            }}
          >
            Access to this system is monitored and restricted.
          </Typography>
        </Box>
      </Box>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <Box
        sx={{
          position: {
            xs: "relative",
            md: "absolute",
          },

          bottom: {
            xs: "20px",
            md: "18px",
          },

          left: {
            md: "50%",
          },

          transform: {
            md: "translateX(-50%)",
          },

          zIndex: 5,

          width: {
            xs: "calc(100% - 32px)",
            md: "620px",
          },

          mx: {
            xs: "16px",
            md: 0,
          },
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
            fontSize: {
              xs: "11px",
              md: "13px",
            },

            textAlign: "center",

            mb: "8px",
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
            gap: {
              xs: "8px",
              sm: "15px",
            },
          }}
        >
          <Typography
            sx={{
              color: txtMuted,

              fontSize: {
                xs: "10px",
                md: "12px",
              },

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

              fontSize: {
                xs: "10px",
                md: "12px",
              },

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

              fontSize: {
                xs: "10px",
                md: "12px",
              },

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
    </Box>
  );
}
