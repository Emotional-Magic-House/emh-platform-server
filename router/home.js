const fs = require('fs');
const path = require('path');

function homeRouter(router) {
  const homePage = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
  // 首页
  router.get('/', async (ctx) => {
    console.log(ctx);
    ctx.body = homePage;
  });
}

module.exports = {
  homeRouter,
};
