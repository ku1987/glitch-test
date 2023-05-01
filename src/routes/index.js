const PromiseRouter = require("express-promise-router");
const csrf = require("csurf");
// const { rootDir } = require('../const');

const csrfProtection = csrf({ cookie: false });
const router = PromiseRouter();

router.get("/", csrfProtection, async (req, res) => {
  res.render("templates/index", { csrfToken: req.csrfToken() });
});

module.exports = router;
