export function saveTheme(req, res) {
  const { theme } = req.body;

  if (theme !== "light" && theme !== "dark") {
    return res.status(400).send("Invalid theme.");
  }

  res.cookie("theme", theme, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.redirect("/");
}
