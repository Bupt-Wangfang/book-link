'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/login', controller.login.login);

  // user
  router.get('/user', jwt, controller.user.index);  //根据token查询用户
  router.post('/user', controller.user.create); // 创建用户
  router.post('/user/:id', jwt, controller.user.update); // 更新用户

  // banner
  router.get('/banner', controller.banner.index); // banner列表查询
  router.post('/banner', jwt, controller.banner.create); // 新增bannner
  router.get('/banner/home', controller.banner.banner); // web端首页banner列表
  router.get('/banner/:id', controller.banner.show); // banner详情
  router.post('/banner/:id', jwt, controller.banner.update); // 更新banner
  router.delete('/banner/:id', jwt, controller.banner.destroy); // 删除banner

  // article
  router.post('/article/list', controller.article.list); //文章列表
  router.get('/article/list/:id', controller.article.userList); // 某个用户文章列表
  router.get('/article/:id', controller.article.show); // 文章详情
  router.post('/article/:id', jwt, controller.article.update); // 更新article
  router.post('/article', jwt, controller.article.create); // 新增article
};
