import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Box, CircularProgress } from "@mui/material";

import { auth } from "@/backend/src/firebase";
import { Primary, background } from "../components/Colors";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(Boolean(user));
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
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

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
