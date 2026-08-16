import jwt from "jsonwebtoken";

const JWT_SECRET = "lesson63-secret";

const users = [];

export function register(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(400).send("User already exists.");
  }

  users.push({
    username,
    password,
  });

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });

  res.send("User registered successfully.");
}

export function login(req, res) {
  const { username, password } = req.body;

  const user = users.find(
    (item) => item.username === username && item.password === password,
  );

  if (!user) {
    return res.status(401).send("Invalid username or password.");
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });

  res.send("Login successful.");
}

export function logout(req, res) {
  res.clearCookie("token");
  res.send("Logout successful.");
}

export { JWT_SECRET };
