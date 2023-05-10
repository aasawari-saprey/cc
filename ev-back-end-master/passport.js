const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "455645489604-p3qothv4n72lvrugsqho6qmoi2lig2na.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));




