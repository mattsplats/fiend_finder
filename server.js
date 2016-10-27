'use strict';

// Express vars
const express    = require('express'),
      bodyParser = require('body-parser'),
      //path       = require('path'),

      htmlRoutes = require('./app/routing/html-routes.js'),
      apiRoutes  = require('./app/routing/api-routes.js'),

      app        = express(),
      PORT       = 80;

// Express init
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static routes
app.use(express.static('app/public/src'));

// HTML routes
app.get('/', htmlRoutes.home);
app.get('/survey', htmlRoutes.survey);

// API routes
app.get('/api/friends', apiRoutes.get);
app.post('/api/friends', apiRoutes.post);

// Init server
app.listen(process.env.PORT || PORT, function () {
	console.log(`App listening on port ${PORT}`);
});