const { auth } = require("../service");

const verifyAdmin = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authorization token is required",
      });
    }

    const token = authHeader.split("Bearer ")[1];

    const decodedToken = await auth.verifyIdToken(token);

    if (!decodedToken.email) {
      return res.status(401).json({
        message: "Invalid authentication token",
      });
    }

    if (decodedToken.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({
        message: "You are not authorized to access the admin portal",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Admin authenticated successfully",
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email,
      },
    });
  } catch (error) {
    console.error("Admin verification error:", error);

    return res.status(401).json({
      status: "error",
      message: "Invalid or expired authentication token",
    });
  }
};

module.exports = {
  verifyAdmin,
};
