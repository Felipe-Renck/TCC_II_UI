sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	var counter;

	return BaseController.extend("sap.ui.demo.nav.controller.login.Login", {

		onInit : function (oEvent) {
			counter = 1;
       },

		onLoginTap: function (oEvent) {
			if (counter < 3) {
				this.getRouter().navTo("candidateList");
				counter = counter + 1;
			}
			else{
				this.getRouter().navTo("result");
			}
		}

	});

});