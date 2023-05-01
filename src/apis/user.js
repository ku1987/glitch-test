/**
 * @typedef { import("./types").UserMaster } UserMaster
 * @typedef { import("./types").UserProfile } UserProfile
 */

const { userProfileUrl, userMasterUrl } = require("../const");
const { get } = require("./apiClient");

/**
 * @returns {UserMaster[]}
 */
const getUserMasters = async () => {
  const userMasters = await get(userMasterUrl);
  return userMasters;
};

/**
 * @returns {UserProfile[]}
 */
const getUserProfiles = async () => {
  const userProfiles = await get(userProfileUrl);
  return userProfiles;
};

module.exports = {
  getUserMasters,
  getUserProfiles,
};
