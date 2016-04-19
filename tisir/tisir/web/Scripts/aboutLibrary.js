$(document).bind("mobileinit", function () {
    
    console.log("Page en cours d'initialisation...");
    aboutNamespace.initialize();
   // $.mobile.initializePage();
    console.log("Page initialisée !");

});


(function () {
    this.aboutNamespace = this.aboutNamespace || {};
    var ns = this.aboutNamespace;

    ns.initialize = function () {
        console.log("About Page ...");
    }

})();