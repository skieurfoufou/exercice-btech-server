const users = require("../data-layer/controllers/users.controller");

const getAllUsers = async (options) => {
  const { subCategory, q } = options;
  let filter = {};

  if (subCategory) {
    filter.subCategory = subCategory;
  }

  if (q) {
    filter["title"] = { $regex: q, $options: "i" };
  }

  const allUsers = await users.read(filter);
  if (allUsers.length === 0) {
    throw new Error("no users found!");
  }
  return allUsers;
};

const createUser = async (newUser) => {
  if (!newUser.name || !newUser.age) {
    throw new Error(500, `no user created`);
  }
  const res = await users.create(newUser);

  return res;
};

module.exports = {
  getAllUsers,
  createUser,
};
