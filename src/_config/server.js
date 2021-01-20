const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

module.exports = () => {
    console.log("[Koa] Creating a new server")

    router.get('/', ctx =>{
        const { response } = ctx
        response.body = { message: 'Hello Koa'}
    })

    app.use(router.routes())

    app.listen(8080)
}