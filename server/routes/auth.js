const authController = require('../controllers/authcontroller.js');


module.exports = (app, passport) => {

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/teachers',
        failureRedirect: '/'
    }
    ));

    app.get('/teachers', isLoggedIn, authController.choice);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/teachers',
        failureRedirect: '/'
    }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        
        res.redirect('/signin');
    }
}