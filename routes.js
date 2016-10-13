var express = require('express');

var router = express.Router();

router.get('/', function (request, response) {
	response.render('layout');
});
router.get('/user/:id', function (request, response) {
	response.render('user', {
		userId: request.params.id
	});
});

module.exports = router;
