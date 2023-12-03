sap.ui.define([
	"sap/ui/core/mvc/Controller"
], (Controller) => {
	"use strict";

	return Controller.extend("flovogt.website.controller.Header", {

		onInit() {
			this.getRouter().getRoute("home").attachMatched(this.onHomeRouteMatched.bind(this));
			this.getRouter().getRoute("about").attachMatched(this.onAboutMeRouteMatched.bind(this));
			this.getRouter().getRoute("projects").attachMatched(this.onProjectsRouteMatched.bind(this));
		},

		getRouter() {
			return this.getOwnerComponent().getRouter();
		},

		onHomeRouteMatched() {
			this.byId("segmentedButton").setSelectedKey("home");
			this.byId("segmentedButton").focus();
		},

		onAboutMeRouteMatched() {
			this.byId("segmentedButton").setSelectedKey("about");
			this.byId("segmentedButton").focus();
		},

		onProjectsRouteMatched() {
			this.byId("segmentedButton").setSelectedKey("projects");
			this.byId("segmentedButton").focus();
		},

		onMenuItemChange(oEvent) {
			const keyMenuItem = oEvent.getParameter("item").getKey();
			this.getRouter().navTo(keyMenuItem);
		}

	});

});
