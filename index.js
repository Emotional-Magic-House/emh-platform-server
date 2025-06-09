const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const { init: initDB } = require('./db');
const { registerRouter } = require('./router');

const port = process.env.PORT || 80;

async function bootstrap() {
  const app = new Koa();

  const models = await initDB();

  const router = registerRouter();

  app
    .use(logger())
    .use(bodyParser())
    .use(async (ctx, next) => {
      ctx.db = { ...models };
      await next();
    })
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(port, () => {
    console.log('启动成功', port);
  });
}

bootstrap();
