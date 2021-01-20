const Boom = require('boom')
const Validator = require('fastest-validator')
const services = require('./services')
const jwt = require('jsonwebtoken')

const v = new Validator()

module.exports = {
    auth: async ctx => {
        const { request: { body }, response } = ctx
        
        const schema = {
            email: {max: 255, min: 1, type: 'string'},
            password: {max: 50, min: 8, type: 'string'}
        }
        const errors = v.validate(body, schema)
        
        if(Array.isArray(errors) && errors.length){
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }
        
        const user = await services.auth(body)
        if(user){
            response.body = {
                result: jwt.sign({ email: user.email }, 'secret')
            }
        } else{
            response.status = 401
            response.body = { result: Boom.unauthorized() }
        }
    }
}