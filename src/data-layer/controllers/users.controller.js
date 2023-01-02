const userModel = require("../models/users.model");

async function read(filter, proj) {
  return await userModel.find(filter, proj);
}

async function create(newUser) {
  return await userModel.create(newUser);
}

module.exports = {
  read,
  create,
};
