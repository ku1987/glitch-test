const csrf = require("csurf");
const PromiseRouter = require("express-promise-router");

const { giftValidator } = require("../../validators/gift");
const { addWish } = require("../usecases/wish/addWish");

const router = PromiseRouter();
const csrfProtection = csrf({ cookie: false });

router.post("/", csrfProtection, giftValidator, async (req, res) => {
  const { userid: userId, wish } = req.body;
  const result = await addWish(userId, wish);
  return res.render(result.templates, result.data);
});

module.exports = router;
