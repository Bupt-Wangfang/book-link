'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class BannerController extends Controller {
    // banner列表查询
  async index() {
    const { ctx } = this;
    const data = await ctx.model.Banner.findAndCountAll();
    const res = { list: data.rows, total: data.count };
    ctx.helper.success({ ctx, res });
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
    // web端只查找已经上架的banner
    const res = await ctx.model.Banner.findAll({ where: { status: 'published' } });
    ctx.helper.success({ ctx, res });
  }
  
  // 删除banner
  async destroy() {
    const { ctx } = this;
  }
}

module.exports = BannerController;
