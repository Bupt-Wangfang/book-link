'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 根据token查询用户
  async index() {
    const { ctx } = this;
  }

  // 创建用户
  async create() {
    const { ctx } = this;
  }

  // 更新用户
  async update() {
    const { ctx } = this;
  }
}

module.exports = UserController;
