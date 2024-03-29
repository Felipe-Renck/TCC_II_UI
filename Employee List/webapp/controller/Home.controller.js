sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

		onDisplayNotFound : function () {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function () {
			this.getRouter().navTo("candidateList");
		},

		onNavToLogin : function () {
			this.getRouter().navTo("login");
		},

		onNavToResult : function () {
			this.getRouter().navTo("result");
		}
	});

});
