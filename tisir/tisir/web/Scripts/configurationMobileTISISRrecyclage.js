/// <reference path="configurationMobileTISISR.js" />
$(document).bind("mobileinit", function () {
    console.log('Balises à ne pas traiter en cours de configuration ...');
    $.mobile.page.prototype.options.keepNative = "input.textTISIR";
    //$.mobile.page.prototype.options.keepNative = "video.audiovisuelle";
    //$.mobile.page.prototype.options.keepNative = "canvas.audiovisuelle";
    console.log('Prise en compte des Balises à ne pas traiter, avec succès!!!');
});
