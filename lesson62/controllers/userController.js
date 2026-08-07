const users = [
  {
    id: 1,
    name: "Julia",
    email: "julia@example.com",
  },
  {
    id: 2,
    name: "Alex",
    email: "alex@example.com",
  },
  {
    id: 3,
    name: "Kate",
    email: "kate@example.com",
  },
];

export function getUsers(req, res) {
  res.render("users/list.pug", {
    title: "Users",
    users,
  });
}

export function getUserById(req, res) {
  const userId = Number(req.params.userId);

  const user = users.find((item) => item.id === userId);

  if (!user) {
    return res.status(404).send("User not found.");
  }

  res.render("users/details.pug", {
    title: "User Details",
    user,
  });
}
