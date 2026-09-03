const db = require("../db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const usersRef = db.collection("users");

    const existingUser = await usersRef
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existingUser.empty) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usersRef.add({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "User registered successfully",
      id: user.id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const snapshot = await db
      .collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: userDoc.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
