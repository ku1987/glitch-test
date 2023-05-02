const csurfHandling = (error, req, res, next) => {
  if (error.code === "EBADCSRFTOKEN") {
    console.warn("Csurf error");
    const message = "Something went wrong.";
    const data = {
      message,
    };
    return res.render("templates/error", data);
  }
  return next(error);
};

module.exports = {
  csurfHandling,
};
