var express = require('express');

var router = express.Router();

var models = require('./models');

router.get('/', function (request, response) {
	response.render('layout');
});

router.get('/mapPoint/add', function (request, response) {
	response.render('mapPoint/add');
});

router.get('/api/mapPoints', function (request, response) {
	var mapPointsArray = [];

	models.mapPoint.findAll().then(function (mapPoints) {
		mapPoints.forEach(function (mapPoint) {
			mapPointsArray.push({
				id: mapPoint.dataValues.id,
				title: mapPoint.dataValues.title,
				description: mapPoint.dataValues.description,
				lat: mapPoint.dataValues.lat,
				lng: mapPoint.dataValues.lng
			});
		});

		response.json(mapPointsArray);
	}).catch(function (err) {
		response.json({
			error: err
		});
	});
});

router.get('/api/mapPoint/add', function (request, response) {
	models.mapPoint.findOrCreate({
		where: {
			title: request.query.title,
			description: request.query.description,
			lat: request.query.lat,
			lng: request.query.lng
		}
	}).spread(function (mapPoint, created) {
		if (!created)
			response.json({
				error: 'Taki punkt już jest w bazie!'
			});
		else {
			response.json({
				title: mapPoint.dataValues.title,
				description: mapPoint.dataValues.description,
				lat: mapPoint.dataValues.lat,
				lng: mapPoint.dataValues.lng
			});
		}
	}).catch(function (err) {
		response.json({
			error: err
		});
	});
});

router.get('/api/mapPoint/:id', function (request, response) {
	models.mapPoint.findOne({
		where: {
			id: request.params.id
		}
	}).then(function (mapPoint) {
		var mapPointData = {
			id: mapPoint.dataValues.id,
			title: mapPoint.dataValues.title,
			description: mapPoint.dataValues.description,
			lat: mapPoint.dataValues.lat,
			lng: mapPoint.dataValues.lng
		};

		response.json(mapPointData);
	}).catch(function (err) {
		response.json({
			error: err
		});
	});
});

module.exports = router;
