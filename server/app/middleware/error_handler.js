'use strict';

module.exports = () => {
    return async function errorHandler(ctx, next){
        try {
            await next();
        } catch(err) {
            // 所有的异常都在app上触发一个error事件
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;
            // 生产环境时500详细错误内容不返回给客户端
            const error = status === 500 && ctx.app.config.env === 'prod' 
            ? 'Internal Server Error' : err.message;
            ctx.body = { code: -1, msg: error };
            if(status === 422) {
                ctx.bdy.msg = err.errors;
            }
            ctx.status = status;
        }
    }
}