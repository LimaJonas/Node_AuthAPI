const Boom = require('boom')
const services = require('./services')

module.exports = {
    auth: async ctx => {
        const { request, response } = ctx
        const user = await services.auth(request.body)
        if(user){
            response.body = user
        } else{
            response.status = 401
            response.body = { result: Boom.unauthorized() }
        }
    }
}