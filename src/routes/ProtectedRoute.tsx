import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Box, CircularProgress } from "@mui/material";
import { auth } from "../config/firebase";
import { API_BASE_URL } from "../config/api";
import { Primary, background } from "../components/Colors";

export default function ProtectedRoute() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAuthorized(false);
        return;
      }

      try {
        const token = await user.getIdToken();

        const response = await fetch(`${API_BASE_URL}/auth/verify`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          await auth.signOut();
          setIsAuthorized(false);
          return;
        }

        setIsAuthorized(true);
      } catch (error) {
        console.error("Admin authorization error:", error);

        await auth.signOut();
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isAuthorized === null) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: background,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          size={32}
          sx={{
            color: Primary,
          }}
        />
      </Box>
    );
  }

  if (!isAuthorized) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
