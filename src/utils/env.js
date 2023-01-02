const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });

const env = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
};

module.exports = env;
