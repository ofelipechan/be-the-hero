const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;