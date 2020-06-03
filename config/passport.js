const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function(passport){    // we will pass this passport from app.js file
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            // Match User
            User.findOne({email: email })
                .then(user => {
                    if(!user){  // if user does not exist
                        // null for error, false for user
                        return done(null, false, {message: 'That email is not registered'});
                    }

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => { // user.password is the hashed password
                        if(err) throw err;
                        if(isMatch){
                            return done(null, user);
                        }else{
                            return done(null, false, {message: 'Incorrect Password'});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    );

    // http://www.passportjs.org/docs/downloads/html/
    /*
    In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request.
    If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

    Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session.
    In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
     */

    // runs once, when user is put in hashmap with value is userid
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // used to retrieve user from userid, happens everytime request happens
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

};