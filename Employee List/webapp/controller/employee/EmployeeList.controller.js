sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (BaseController, MessageBox, MessageToast) {
	"use strict";

	var counter;

	return BaseController.extend("sap.ui.demo.nav.controller.employee.EmployeeList", {

		onInit : function (oEvent) {
			counter = 1;
       },

		onListItemPressed: function (oEvent) {
			var item, context;

			item = oEvent.getSource();
			context = item.getBindingContext();
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.confirm(
				"Deseja confirmar o voto para " + item.getTitle() + " ?", {
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onClose: function () {
						if (counter === 1) {
							counter = counter + 1
							MessageToast.show("Voto computado com sucesso");
							this.getRouter().navTo("login");
						}
						else{
							MessageToast.show("Voto já computado com o mesmo usuário");
							this.getRouter().navTo("login");
						}
					}.bind(this)
				}
			);
		}
	});

});