var express = require('express'),
	http = require('http');

var app = express(),
	server = http.Server(app);

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));

app.use('/', require('./routes'));

server.listen(3000);
