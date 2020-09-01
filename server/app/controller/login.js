'use strict';

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');

class LoginController extends Controller {
  // 登录获取token
  async login() {
    const { ctx } = this;
    let body = ctx.request.body;
    // 进行参数校验
    // ctx.validate(ctx.rule.loginUser, body);
    // 查找用户
    const user = await ctx.model.User.findOne({
      where: {
        name: body.name
      }
    });
    if(user) {
      // 检查密码是否匹配
      const pwdMatchFlag = bcrypt.compareSync(body.password, user.password);
      if(pwdMatchFlag) {
        // 密码验证通过
        const token  = ctx.app.jwt.sign({
          ...ctx.request.body,
        }, ctx.app.config.jwt.secret, { expiresIn: 60 * 60 * 60 });
        ctx.body = {
          data: token
        };
      } else {
        console.log('error');
      }
    }
  }
}

module.exports = LoginController;
