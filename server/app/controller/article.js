'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 文章列表
  async list() {
    const { ctx } = this;
  }

  // 某个用户文章列表
  async userList() {
    const { ctx } = this;
  }
  
  // // 文章详情
  async show() {
    const { ctx } = this;
  }

  // 新增article
  async create() {
    const { ctx } = this;
  }

  // 更新article
  async update() {
    const { ctx } = this;
  }
}

module.exports = ArticleController;
