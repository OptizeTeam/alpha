var express = require('express');

var router = express.Router();

router.get('/', function (request, response) {
	response.render('layout');
});

router.get('/api/points', function (request, response) {
	var pointsArray = require('./data/points.json');

	response.json(pointsArray);
});

router.get('/api/point/:id', function (request, response) {
	var pointsArray = require('./data/points.json');

	var pointData = pointsArray[request.params.id];

	response.json(pointData);
});

module.exports = router;
