const Router = require('@koa/router');

const auth = require('./controllers/auth');
const register = require('./controllers/register');
const refresh = require('./controllers/refresh');
const logout = require('./controllers/logout');
const userInfo = require('./controllers/user-info');
const authorize = require('./middleware/authorize');

const router = new Router();

router.post(
  '/auth', 
  auth.post
);

router.get(
  '/refresh',
  refresh.get
);

router.get(
  '/logout',
  logout.get
)

router.post(
  '/register',
  register.post
);

router.get(
  '/user-info', 
  authorize,
  userInfo.get  
);

module.exports = router;
