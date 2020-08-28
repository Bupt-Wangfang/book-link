'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
    // banner列表查询
  async index() {
    const { ctx } = this;
  }

  // 新增bannner
  async create() {
    const { ctx } = this;
  }

  // 更新banner
  async update() {
    const { ctx } = this;
  }

  // banner详情
  async show() {
    const { ctx } = this;
  }

  // web端首页banner列表
  async banner() {
    const { ctx } = this;
  }
  
  // 删除banner
  async destroy() {
    const { ctx } = this;
  }
}

module.exports = BannerController;
