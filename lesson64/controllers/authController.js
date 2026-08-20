import { users } from "../config/passport.js";

export function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).send("User already exists.");
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
  };

  users.push(newUser);

  res.status(201).send("User registered successfully.");
}

export function logout(req, res, next) {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        return next(sessionError);
      }

      res.clearCookie("connect.sid");
      res.send("Logout successful.");
    });
  });
}

export function protectedRoute(req, res) {
  res.send(`Protected route. Welcome, ${req.user.email}`);
}
