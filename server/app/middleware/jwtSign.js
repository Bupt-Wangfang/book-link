module.exports = (options, app) => {
    return async function signToken(ctx, next) {
        const token = ctx.app.jwt.sign({
            ...ctx.request.body,
          }, ctx.app.config.jwt.secret, { expiresIn: 60 * 60 * 60 });
        await next();
    }
}