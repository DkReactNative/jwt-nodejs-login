const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const passport = require("passport");
require("../config/passport.config")(passport);

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/logout",
    passport.authenticate("jwt", { session: false }),
    controller.logout
  );

  app.get("/test/all", controller.allAccess);

  app.get("/test/user", passport.authenticate("jwt", { session: false }), controller.userBoard);

  app.get(
    "/test/admin",
    [passport.authenticate("jwt", { session: false }), authJwt.isAdmin],
    controller.adminBoard
  );
};
