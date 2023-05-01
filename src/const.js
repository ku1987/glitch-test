const path = require("path");

require("dotenv").config();

const rootDir = path.dirname(__dirname);

const userProfileUrl =
  "https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json";
const userMasterUrl =
  "https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json";

const email = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  username: process.env.EMAIL_USERNAME,
  password: process.env.EMAIL_PASSWORD,
  from: "do_not_reply@northpole.com",
  to: "santa@northpole.com",
};

module.exports = {
  rootDir,
  userProfileUrl,
  userMasterUrl,
  email,
};
