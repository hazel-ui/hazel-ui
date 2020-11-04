"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaQuery = void 0;
var breakpoints_1 = require("./breakpoints");
function createMediaQuery(type, width) {
    return "@media (" + type + "-width: " + width + "px)";
}
exports.MediaQuery = {
    minWidth: {
        mobile: createMediaQuery("min", breakpoints_1.breakpoints.mobile),
        tablet: createMediaQuery("min", breakpoints_1.breakpoints.tablet),
        desktop: createMediaQuery("min", breakpoints_1.breakpoints.desktop),
        desktopLarge: createMediaQuery("min", breakpoints_1.breakpoints.desktopLarge),
    },
    maxWidth: {
        mobileSmall: createMediaQuery("max", breakpoints_1.breakpoints.mobile - 1),
        mobileLarge: createMediaQuery("max", breakpoints_1.breakpoints.tablet - 1),
        tablet: createMediaQuery("max", breakpoints_1.breakpoints.desktop - 1),
        desktop: createMediaQuery("max", breakpoints_1.breakpoints.desktopLarge - 1),
    },
};
