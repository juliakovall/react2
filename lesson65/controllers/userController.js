import User from "../models/User.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find().select("-password");

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Users</title>
        </head>

        <body>
          <h1>Users from MongoDB Atlas</h1>

          <ul>
            ${users
              .map(
                (user) => `
                  <li>
                    ${user.email}
                  </li>
                `,
              )
              .join("")}
          </ul>
        </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error(error);

    res.status(500).send("Failed to load users.");
  }
}
