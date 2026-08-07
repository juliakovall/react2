export function getUsers(req, res) {
  res.send("Get users route.");
}

export function createUser(req, res) {
  res.send("Post users route.");
}

export function getUserById(req, res) {
  res.send(`Get user by Id route: ${req.params.userId}`);
}

export function updateUser(req, res) {
  res.send(`Put user by Id route: ${req.params.userId}`);
}

export function deleteUser(req, res) {
  res.send(`Delete user by Id route: ${req.params.userId}`);
}
