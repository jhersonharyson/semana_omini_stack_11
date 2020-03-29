const routes = require('express').Router()

const ongsController = require('./controller/ongsController') 
const incidentsController = require('./controller/incidentsController') 
const profileController = require('./controller/profileController') 

routes.post('/ongs', ongsController.create)
routes.get('/ongs',  ongsController.list)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents',  incidentsController.list)
routes.delete('/incidents/:id',  incidentsController.delete)

routes.get('/profile',  profileController.list)



module.exports = routes;