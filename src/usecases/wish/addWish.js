const { getUserMasters, getUserProfiles } = require("../../apis/user");
const models = require("../../models/wish");
const store = require("../../store");
const { isUnderTenYearOld, validateDate } = require("../../utils/date");

const addWish = async (userId, wish) => {
  // For each form post we need to fetch data from the API.
  const userMastersPromise = getUserMasters();
  const userProfilesPromise = getUserProfiles();
  const [userMasters, userProfiles] = await Promise.all([
    userMastersPromise,
    userProfilesPromise,
  ]);

  const userMaster = userMasters.find((u) => u.username === userId);
  if (!userMaster) {
    const message = "User does not exist.";
    console.warn(`${message}: ${userId}`);
    const data = {
      message,
    };
    return {
      templates: "templates/error",
      data,
    };
  }
  const userProfile = userProfiles.find((u) => u.userUid === userMaster.uid);
  if (!userProfile) {
    const message = "User profile does not exist.";
    console.warn(`${message}: ${userId}`);
    const data = {
      message,
    };
    return {
      templates: "templates/error",
      data,
    };
  }
  if (!validateDate(userProfile.birthdate, "YYYY/MM/DD")) {
    const message = "User's birth date is not valid.";
    console.warn(`${message}: ${userProfile.birthdate}`);
    const data = {
      message,
    };
    return {
      templates: "templates/error",
      data,
    };
  }
  if (isUnderTenYearOld(userProfile.birthdate)) {
    const message = "User is under 10 years old.";
    console.warn(`${message}: ${userProfile.birthdate}`);
    const data = {
      message,
    };
    return {
      templates: "templates/error",
      data,
    };
  }
  const existingWish = await models.getWish(userMaster.uid, store);
  if (existingWish) {
    const message = "This user's wish is already registered.";
    console.warn(`${message}: ${userId}`);
    const data = {
      message,
    };
    return {
      templates: "templates/error",
      data,
    };
  }

  const newWish = {
    uid: userMaster.uid,
    username: userMaster.username,
    address: userProfile.address,
    birthdate: userProfile.birthdate,
    wishText: wish,
    added_at: Date.now(),
  };
  await models.addWish(newWish, store);
  console.debug("added new wish", newWish);

  const data = {
    username: userMaster.username,
    gift: wish,
    address: userProfile.address,
  };
  return {
    templates: "templates/registered",
    data,
  };
};

module.exports = {
  addWish,
};
