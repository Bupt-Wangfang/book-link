module.exports = (options, app) => {
    return async function tokenDecode(ctx, next) {
        const token = ctx.request.header.authorization;
        let decode;
        if(token) {
            decode = ctx.app.jwt.verity(token, ctx.app.config.jwt.secret);
            await next();
        } else {
            ctx.status = 401;
            ctx.body = {
                msg: '没有token'
            };
        }
    }
}