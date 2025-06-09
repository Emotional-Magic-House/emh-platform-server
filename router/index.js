const Router = require("koa-router");
const { counterRouter } = require('./counter');
const { homeRouter } = require('./home');

function registerRouter() {
  const router = new Router();

  homeRouter(router);
  counterRouter(router);

  return router;
}

module.exports = {
  registerRouter,
};

