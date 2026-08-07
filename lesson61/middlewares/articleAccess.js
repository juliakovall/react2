export function checkArticleAccess(req, res, next) {
  const role = req.headers["x-user-role"];

  if (role !== "admin") {
    return res.status(403).send("Access denied. Admin role required.");
  }

  next();
}
