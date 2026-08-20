import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

export const users = [];

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      const user = users.find((item) => item.email === email);

      if (!user) {
        return done(null, false, {
          message: "User not found.",
        });
      }

      if (user.password !== password) {
        return done(null, false, {
          message: "Incorrect password.",
        });
      }

      return done(null, user);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((item) => item.id === id);

  if (!user) {
    return done(null, false);
  }

  done(null, user);
});

export default passport;
