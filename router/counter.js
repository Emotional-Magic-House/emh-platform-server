function counterRouter(router) {

  // 更新计数
  router.post("/api/count", async (ctx) => {
    const { request } = ctx;
    const { action } = request.body;
    if (action === "inc") {
      await ctx.db.counter.create();
    } else if (action === "clear") {
      await ctx.db.counter.destroy({
        truncate: true,
      });
    }

    ctx.body = {
      code: 0,
      data: await ctx.db.counter.count(),
    };
  });

  // 获取计数
  router.get("/api/count", async (ctx) => {
    console.log(ctx.db);
    const result = await ctx.db.counter.count();

    ctx.body = {
      code: 0,
      data: result,
    };
  });

  // 小程序调用，获取微信 Open ID
  router.get("/api/wx_openid", async (ctx) => {
    if (ctx.request.headers["x-wx-source"]) {
      ctx.body = ctx.request.headers["x-wx-openid"];
    }
  });
}

module.exports = {
  counterRouter
}