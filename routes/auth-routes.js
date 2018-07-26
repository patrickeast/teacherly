module.exports = (app, passport) => {
    app.post('/login', (req, res, next) => {

        return passport.authenticate('local-signin', (err, token, userData) => {
            if (err) {
                if (err.name === 'IncorrectCredentialsError') {
                    return res.status(400).json({
                        success: false,
                        message: err.message
                    });
                }

                return res.status(400).json({
                    success: false,
                    message: 'Username or password incorrect. Please try again.'
                });
            }


            return res.json({
                success: true,
                message: 'Login successful!',
                token,
                user: userData
            });
        })(req, res, next);
    });


    app.post('/signup', (req, res, next) => {

        return passport.authenticate('local-signup', (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: 'Could not process your request. Please try again.'
                });
            }


            return res.status(200).json({
                success: true,
                message: 'Thanks for signing up. You can now log in.'
            });
        })(req, res, next);
    });

}