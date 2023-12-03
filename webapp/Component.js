sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
], (UIComponent, Device) => {
    "use strict";
    return UIComponent.extend("flovogt.website.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        },

        getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
    });
});
