sap.ui.define([
	"sap/ui/core/mvc/Controller"
], (Controller) => {
	"use strict";
	return Controller.extend("flovogt.website.controller.Topic", {

		formatText(key){
			return this.getView().getModel("i18n").getResourceBundle().getText(key);
		}
	});
});
