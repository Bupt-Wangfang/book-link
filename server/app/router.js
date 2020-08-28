'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/login', controller.login.login);

  // user
  router.get('/user', controller.user.index);  //根据token查询用户
  router.post('/user', controller.user.create); // 创建用户
  router.post('/user/:id', controller.user.update); // 更新用户

  // banner

  // article
};
