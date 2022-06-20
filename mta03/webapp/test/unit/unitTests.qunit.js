/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nsmta03/mta03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
