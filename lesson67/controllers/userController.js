import User from "../models/User.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find({}, "email createdAt updatedAt");

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to load users.");
  }
}

export async function createUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists.");
    }

    const user = await User.create({
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create user.");
  }
}

export async function createManyUsers(req, res) {
  try {
    const users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res
        .status(400)
        .send("Request body must contain an array of users.");
    }

    const result = await User.insertMany(users);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create users.");
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;

    const result = await User.updateOne({ _id: id }, { $set: req.body });

    if (result.matchedCount === 0) {
      return res.status(404).send("User not found.");
    }

    res.json({
      message: "User updated successfully.",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update user.");
  }
}

export async function updateManyUsers(req, res) {
  try {
    const { filter, update } = req.body;

    if (!filter || !update) {
      return res.status(400).send("Filter and update are required.");
    }

    const result = await User.updateMany(filter, { $set: update });

    res.json({
      message: "Users updated successfully.",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update users.");
  }
}

export async function replaceUser(req, res) {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const result = await User.replaceOne(
      { _id: id },
      {
        email,
        password,
      },
    );

    if (result.matchedCount === 0) {
      return res.status(404).send("User not found.");
    }

    res.json({
      message: "User replaced successfully.",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to replace user.");
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const result = await User.deleteOne({
      _id: id,
    });

    if (result.deletedCount === 0) {
      return res.status(404).send("User not found.");
    }

    res.json({
      message: "User deleted successfully.",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete user.");
  }
}

export async function deleteManyUsers(req, res) {
  try {
    const filter = req.body;

    if (!filter || Object.keys(filter).length === 0) {
      return res.status(400).send("Delete filter is required.");
    }

    const result = await User.deleteMany(filter);

    res.json({
      message: "Users deleted successfully.",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete users.");
  }
}

export async function getUsersWithCursor(req, res) {
  try {
    const cursor = User.find().select("email createdAt updatedAt").cursor();

    const users = [];

    for await (const user of cursor) {
      users.push(user);
    }

    res.json({
      count: users.length,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to load users with cursor.");
  }
}

export async function getUserStats(req, res) {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          firstUserCreatedAt: { $min: "$createdAt" },
          lastUserCreatedAt: { $max: "$createdAt" },
        },
      },
      {
        $project: {
          _id: 0,
          totalUsers: 1,
          firstUserCreatedAt: 1,
          lastUserCreatedAt: 1,
        },
      },
    ]);

    res.json(
      stats[0] || {
        totalUsers: 0,
      },
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to calculate user statistics.");
  }
}
