const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const config = require("./database");
// const passport = require("passport");

module.exports = (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      User.getUserById(jwt_payload.data._id, (err, user) => {
        if (err) {
          // If error happens
          return done(err, false);
        }

        if (user) {
          // If user is found pass him along
          return done(null, user);
        } else {
          // User not found
          return done(null, false);
        }
      });
    })
  );
};
