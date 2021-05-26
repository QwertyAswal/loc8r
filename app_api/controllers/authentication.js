const passport = require('passport');
const user = require('../models/users');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ 'message': 'All Fields Required' });
    }
    const newUser = new user();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.setPassword(req.body.password);
    newUser.save((err) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            const token = newUser.generateJwt();
            res.status(200).json({ token });
        }
    });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ 'message': 'All Fields Required' });
    }
    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err) {
            return res.status(404).send(err);
        }
        if (user) {
            token = user.generateJwt();
            return res.status(200).json({ token });
        }
        return res.status(401).json(info);
    })(req, res);
};

module.exports = {
    register,
    login
};