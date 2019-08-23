var settings = require("../config");
var npmNodes = require("../lib/nodes");
var npmModules = require("../lib/modules");

npmModules.refreshDownloads().then(function(results) {
    results.forEach(function(res) {
        if (res.state === 'rejected') {
            console.log("Failed:",res.reason);
        } else if (res.value) {
            console.log("Updated:",res.value);
        }
    });
}).catch(function(err) {
    console.log(err);
}).then(function() {
    npmNodes.close();
});
