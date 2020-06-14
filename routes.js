const routes = require('express').Router();
const {signUp} = require('./services/signUp');
const {logIn} = require('./services/login');
const {sessionValidity} = require('./services/sessionValidity');
const {changePassword} = require('./services/changePassword');
const {details} = require('./services/details');
const {logout} = require('./services/logout');
const {validateToken} = require('./services/validateToken');
const {confirmUser} = require('./services/confirmUser');
//Not to be exposed via API Gateway Endpoint
//INternal endpoint to be called by Admin App using service discovery
routes.post('/customer/signup', signUp);
routes.get('/customer/users'); //Endpoint to get all the customer users
routes.get('/customer/disable'); //Endpoint to deactivate customer members

//These endpoints don't need any authorizer
routes.post('/customer/login', logIn);
routes.post('/customer/validate-token', validateToken);
routes.post('/customer/confirm-user', confirmUser);

routes.get('/customer/session', sessionValidity);
routes.get('/customer/details', details);
routes.delete('/customer/session/:sessionId', logout);
routes.post('/customer/change-password', changePassword);

//routes.put('/customer/forgot-password'); //To be implemented across all apps
module.exports = routes;
