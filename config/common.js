var BASE_URL = "/sites/customsites/bam/_api/web";
var VERSION = "0.0.0";
var ENVIRONMENTS = {
    development: "development",
    production: "production",
    sharepoint: "sharepoint"
}

function baseUrl() {
    return BASE_URL;
}

function version() {
    return VERSION;
}

function environments() {
    return ENVIRONMENTS;
}

exports.baseUrl = baseUrl;
exports.version = version;
exports.environments = environments;