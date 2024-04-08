const Router = require('@koa/router');
const testRouter = require('./test.routes');

const router = new Router();
router.use(testRouter.routes());

module.exports = router;