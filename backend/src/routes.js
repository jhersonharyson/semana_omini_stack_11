const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')

const ongsController = require('./controller/ongsController') 
const incidentsController = require('./controller/incidentsController') 
const profileController = require('./controller/profileController') 
const sessionController = require('./controller/sessionController') 

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })})
    , ongsController.create)

routes.get('/ongs',  ongsController.list)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        limit: Joi.number()
    })
}), incidentsController.list)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.list)

routes.post('/session',  sessionController.create)



module.exports = routes;