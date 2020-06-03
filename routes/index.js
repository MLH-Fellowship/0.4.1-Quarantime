const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');
const path = require('path')

// welcome page/
router.get('/', (req, res) => {
     res.sendFile(path.resolve('build', 'index.html'));
})

//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    })
});

module.exports = router;