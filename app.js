var express = require('express'),
	http = require('http');

var models = require('./models');

var app = express(),
	sequelize = models.sequelize,
	server = http.Server(app);

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));

app.use('/', require('./routes'));

sequelize.sync().then(function () {
	server.listen(3000);
});
