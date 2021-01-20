module.exports = {
    auth: ctx => {
        const { response } = ctx
        ctx.body = { message: 'AUTH SUCCESS'}
    }
}