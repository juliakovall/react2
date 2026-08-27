import User from "../models/User.js";

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists.");
    }

    await User.create({
      email,
      password,
    });

    res.status(201).send("User registered successfully.");
  } catch (error) {
    console.error(error);

    res.status(500).send("Server error.");
  }
}

export function logout(req, res, next) {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.send("Logout successful.");
    });
  });
}

export function protectedRoute(req, res) {
  res.send(`Welcome, ${req.user.email}`);
}
