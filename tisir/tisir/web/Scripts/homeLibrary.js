/// <reference path="configurationMobileTISISRrecyclage.js" />



$(document).bind("mobileinit", function () {
    
    console.log("Page en cours d'initialisation...");
    homeNamespace.initialize();
    //$.mobile.initializePage();
    console.log("Page initialisée !");

});


(function () {
    this.homeNamespace = this.homeNamespace || {};
    var ns = this.homeNamespace;

    ns.initialize = function () {
        console.log("Home Page ...");
    }

})();

