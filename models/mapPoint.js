'use strict';

module.exports = function (sequelize, DataTypes) {
	var mapPoint = sequelize.define('mapPoint', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: DataTypes.TEXT,
		lat: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		lng: {
			type: DataTypes.FLOAT,
			allowNull: false
		}
	});

	return mapPoint;
};
