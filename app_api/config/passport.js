const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/users');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, (username, password, done) => {
    user.findOne({ email: username }, (err, newUser) => {
        if (err) {
            return done(err);
        }
        if (!newUser)
            return done(null, false, {
                message: 'Incorrect username'
            });
        if (!newUser.validPassword(password))
            return done(null, false, {
                message: 'Incorrect password'
            });
        return done(null, newUser);
    })
}));
