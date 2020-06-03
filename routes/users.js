const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User Model
const User = require('../models/User');

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

// Register Handle
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2){
        errors.push({ message: 'Please fill in all fields' });
    }

    // Check passwords match
    if(password != password2){
        errors.push({message: 'Passwords do not match'})
    }
    // Check password length
    if(password.length < 6){
        errors.push({message: 'Password should be atleast 6 characters'})
    }

    if(errors.length > 0){
        res.render('register', {
            errors, // same as errors:errors
            name, email, password, password2
        })
    }else{
        // Validation passed
        User.findOne({email: email})
            .then(user => {
                if(user){
                    // user exists
                    errors.push({message: 'Email is already registered'});
                    res.render('register', {
                        errors,
                        name, email, password, password2
                    });
                }else{
                    const newUser = new User({
                        name,       // this is same as name:name
                        email,
                        password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;

                        // set password to hash
                        newUser.password = hash;
                        // save the user in db
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can log in');
                                res.redirect('/users/login');
                            })
                            .catch(err => console.log(err));
                    }))
                }
            })
            .catch();
    }
});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout handle
router.get('/logout', (req, res) => {
    // this logout is from passport
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;