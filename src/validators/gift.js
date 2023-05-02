const { body, validationResult } = require("express-validator");

const giftValidator = [
  body("userid").trim().isLength({ min: 1, max: 100 }).escape(),
  body("wish").trim().isLength({ min: 1, max: 100 }).escape(),
  async (req, res, next) => {
    const errors = validationResult(req);
    const message = errors
      .array()
      .map((err) => err.msg)
      .join("");
    if (!errors.isEmpty()) {
      res.render("templates/error", { message });
      return;
    }
    next();
  },
];

module.exports = {
  giftValidator,
};
