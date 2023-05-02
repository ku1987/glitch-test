// server.js
// where your node app starts
const fs = require("fs");

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

const csurf = require("csurf");
const indexRouter = require("./src/routes/index");
const giftRouter = require("./src/routes/gift");
const { sendEmail } = require("./src/batch/email");
const { csurfHandling } = require("./src/middlewares/csurf");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    name: "session",
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 10 * 1000,
    },
  })
);
app.use(csurf());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);
app.use("/gifts", giftRouter);

app.use(csurfHandling);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.debug(`Your app is listening on port ${listener.address().port}`);
});

process.on("unhandledRejection", (reason, p) => {
  // Catch and log output
  console.error("Unhandled Rejection at:", p, "reason:", reason);
});

process.on("uncaughtException", (err) => {
  // Shut down the server
  fs.writeSync(1, `Uncaught exception: ${err}`);
});

setInterval(() => {
  sendEmail();
}, 15000);
