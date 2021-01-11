import passport from 'passport';
import GitHub from 'passport-github2';
import dotenv from 'dotenv';
dotenv.config();

const GitHubStrategy = GitHub.Strategy;

const GITHUB_CLIENT_ID: string = process.env.GH_ID;
const GITHUB_CLIENT_SECRET: string = process.env.GH_SECRET;

passport.serializeUser((user, done) => {
  console.log('serializeUSer : guthub.');
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  console.log('deserializeUSer : guthub.');
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      session: true,
      callbackURL: 'http://127.0.0.1:3000/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        console.log(accessToken, refreshToken, profile);
        return done(null, profile);
      });
    },
  ),
);

export default passport;