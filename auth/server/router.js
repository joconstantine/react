const Authentication = require('./controller/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, function (req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/')
  app.post('/signup', Authentication.signup);
};
