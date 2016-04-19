/// <reference path="configurationMobileTISISR.js" />
/// <reference path="configurationMobileTISISRrecyclage.js" />
/// <reference path="recyclabiliteLibrary.js" />
/// <reference path="aboutLibrary.js" />
/// <reference path="homeLibrary.js" />

$(document).on('click', 'div #lHome #defaultPage', function (e) {
    e.preventDefault();

    $.mobile.changePage("default.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });
    
    e.stopPropagation();
});

$(document).on('click', 'div #lRecyclability #recyclabPage', function (e) {
    e.preventDefault();

    $.mobile.changePage("recyclability.html", {allowSamePageTransition: true, transition: 'none', reloadPage: false});

    e.stopPropagation();
});

$(document).on('click', 'div #lAboutTisir #aboutPage', function (e) {
    e.preventDefault();

    $.mobile.changePage("aboutTisir.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

    /*$.mobile.changePage("aboutTisir.html", {
        transition: "none",
        reverse: false,
        changeHash: false
    });*/

    e.stopPropagation();
});

$(document).on('click', 'div #lResult #resultat', function (e) {
    e.preventDefault();

    $.mobile.changePage("result.jsp", {allowSamePageTransition: true, transition: 'none', reloadPage: false});

    e.stopPropagation();
});

(function () {
    this.commonNamespace = this.commonNamespace || {};
    var ns = this.commonNamespace;
    
    ns.initialize = function () {      
        // Put video listeners into place
        video.pause();
        localStream.stop();
        if (navigator.getUserMedia) { // Standard
            navigator.getUserMedia(param, function (stream) {
                
                video.src=null;
            }, errBack);
        } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
            video.src = "";
        } else if (navigator.mozGetUserMedia) { // WebKit-prefixed
            video.mozSrcObject = null;
        }
    }

    ns.changementPage = function changementPage() {
        //Il faut utiliser activePage pour la suite ...............................
        var page = $.mobile.activePage[0];
        var urldocument = null;
        var dir = e.type;

        if ((page.id == "homeTisir") || (page.id == "aboutTisir")) {
            urldocument = "recyclability.html";
        } else {
            if (page.id == "homeTisir" ) {
                urldocument = "default.html";
            } else{
                urldocument = "aboutTisir.html";
            }
        }
            
        $.mobile.changePage(urldocument, {
            transition: "none",
            reverse: false,
            changeHash: false
        });
    }

})();

