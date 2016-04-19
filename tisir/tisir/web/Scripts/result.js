/* global recyclabiliteNamespace, resultRecyclabiliteNamespace */

﻿/// <reference path="configurationMobileTISISRrecyclage.js" />

//Références : 
///http:|//www.lilleweb.fr/js/2014/08/14/manipuler-sa-webcam/
///https|//://openclassrooms.com/forum/sujet/sauvegarder-le-contenu-d-un-canvas-66872
///http:|//www.w3schools.com/jquerymobile/jquerymobile_ref_icons.asp
///http:|//proquestcombo.safaribooksonline.com.res.banq.qc.ca/book/programming/javascript/9781430259459/chapter-8-video-to-video-using-webrtc/9781430259442_ch08_xhtml#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE0MzAyNTk0NTklMkY5NzgxNDMwMjU5NDQyX2NoMDNfeGh0bWwmcXVlcnk9
///http:|//w3c.github.io/mediacapture-scenarios/scenarios.html

//lien déployement
//https:|//9729fc11cd3230179c2b2d709e847895efc7f32d-www.googledrive.com/host/0B7CINczuwfBLakZDQ0JyYlk0MkU/recyclability.html

$(document).bind("pagebeforeload pageload mobileinit", function () {
    console.log("Page 'result' en cours d'initialisation par 'jquery mobile'...");
    $.mobile.loadingMessage = "Patientez s'il vous plait ...";
    resultRecyclabiliteNamespace.redimCanvas3();
    console.log("Page 'result' initialisée par jquery mobile !");

});

$(document).on("updatelayout", "#result", function (e) {
    console.log("Page 'result' en cours de mise à jour ...");
    e.preventDefault();
    resultRecyclabiliteNamespace.redimCanvas3();
    e.stopPropagation();
    console.log("Page 'result' mise à jour ...");
});

$(document).on("pageinit", "#result", function (e) {
    console.log("Page 'result' en cours d'initialisation par 'pageinit' ...");
    resultRecyclabiliteNamespace.redimCanvas3();
    console.log("result Page !");
    console.log("Page 'result' initialisée pageinit!");
    
    //e.stopPropagation();
    
});

$(document).on("pagebeforecreate pagecreate pageinit", "#result", function (e) {
    console.log("Page 'result' en cours de précréation par 'pagebeforecreate' ...");
    resultRecyclabiliteNamespace.redimCanvas3();
    console.log("result Page !");
    console.log("Page 'result' précréée par pagebeforecreate!");
    
    //e.stopPropagation();
    
});

$(document).on("pagecreate", "#result", function (e) {
    console.log("Page 'result' en cours de cr!qtion par 'pagecreate' ...");
    resultRecyclabiliteNamespace.redimCanvas3();
    console.log("result Page !");
    console.log("Page 'result' créée par pagecreate!");
    
    //e.stopPropagation();
    
});

$(document).on("pagebeforeshow pageshow", "#result", function(e) {
    e.preventDefault();
    console.log("Page 'result' avant affichage!");
    //recyclabiliteNamespace.fetchImageForLocalStorage(recyclabiliteNamespace.iCanvas);

    console.log("Redimensionnement de canvas avant l'affichage de la Page result en cours ...");
    resultRecyclabiliteNamespace.redimCanvas3();
    console.log("Redimensionnement de canvas avant l'affichage de la Page result effectué avec succès!");

    /*console.log("Ajout de l'image provenant de la vidéo au canvas en cours ...");
    recyclabiliteNamespace.drawEachCanvasNewPage(recyclabiliteNamespace.canv1);
    console.log("Ajout de l'image provenant de la vidéo au canvas effectué avec succès!");*/

    console.log("Page 'result' prête pour l'affichage!");
    //console.log('e.dataTransfer.files[0] : ' + e.dataTransf.files[0]);
    
    e.stopPropagation();
});

$(document).on("pagebeinit pageinit", "#result", function (e) {
    e.preventDefault();
    console.log("Traitements à l'initialisation de la Page 'result' en cours ...");    
    //recyclabiliteNamespace.contentCanvasToLocalStorage(recyclabiliteNamespace.canv1, recyclabiliteNamespace.widthClient, recyclabiliteNamespace.heightClient);
    resultRecyclabiliteNamespace.redimCanvas3();

    console.log("Traitements à l'initialisation de la Page 'result' effectués avec succès!");
    
    e.stopPropagation();
});

$(document).on("pagebeforehide", "#result", function (e) {
    e.preventDefault();
    console.log("Traitements avant la fermeture la Page 'result' en cours ...");
    
    //recyclabiliteNamespace.contentCanvasToLocalStorage(recyclabiliteNamespace.canv1, recyclabiliteNamespace.widthClient, recyclabiliteNamespace.heightClient);
    resultRecyclabiliteNamespace.redimCanvas3();

    console.log("Traitements avant la fermeture de la Page 'result' effectués avec succès!");
    
    e.stopPropagation();
});

$(document).on('click', '#divBack1 #back1', function (e) {
    e.preventDefault();

    $.mobile.changePage("recyclability.html#imagesObjet", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

    e.stopPropagation();
});

$(document).on('click', '#divNouvelleV #nouvelleV', function (e) {
    e.preventDefault();

    $.mobile.changePage("recyclability.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

    e.stopPropagation();
});

//$(document).ready(function(){
    // define the application name
  //  this.resultRecyclabiliteNamespace = this.resultRecyclabiliteNamespace || {};

(function () {
    this.resultRecyclabiliteNamespace = this.resultRecyclabiliteNamespace || {};
    var ns = this.resultRecyclabiliteNamespace;

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;   

    ns.iCanvas = 0;
    
    ns.widthVideo = 0; ns.heightVideo = 0;
    ns.widthClient = 0, ns.heightClient = 0;

    ns.canvas1 = ns.canvas1 || {}, ns.canvas2 = ns.canvas2 || {}, ns.canvas3 = ns.canvas3 || {}, ns.canvas4 = ns.canvas4 || {};
    ns.canv1 = ns.canv1 || {}, ns.canv2 = ns.canv2 || {}, ns.canv3 = ns.canv3 || {}, ns.canv4 = ns.canv4 || {};
    ns.can1 = 0 || {};
    ns.can2 = ns.can2 || {};
    
    ns.donneeImage = ns.donneeImage || {};
    ns.largeurImage = ns.largeurImage || 0;
    ns.hauteurImage = ns.hauteurImage || 0;
    
    ns.imageDataCanvas = ns.imageDataCanvas || {}, ns.imageDataVideo = ns.imageDataVideo || {};

    var cam = 0;

    ns.initialize = function () {
        ns.redimCanvas3();
    };
    
    function initialize() {
        ns.initialize();
    }

    
    //Routine de création des images dans les canvas 
    ns.drawEachCanvas = function (c) {
        console.log("Récupération de l'image dans le localStorage en cours ...");
        //console.log("JSON.parse(localStorage['dataVideo']) : " + JSON.parse(localStorage['dataVideo']));

        var imageTisir = new Image();
        imageTisir.src = JSON.parse(localStorage['dataVideo']);

        imageTisir.onload = function () {
            c.getContext('2d').drawImage(imageTisir, 0, 0, ns.widthClient, ns.heightClient);
        };

        console.log('Transformation de la capture de vidéo en image/png');
        var data = c.toDataURL('image/png', 0.99);
        c.setAttribute('src', data);
        
        console.log("Traçage d'une image de localStorage effectuée avec succès !");
    };

    //Routine de sauvegarde du contenu de la vidéo dans le localStorage
    ns.contentVideoToLocalStorage = function (sourceVideo, c, width, height) {
        console.log("Mise à memoire de  l'image en cours...");
        
        var w = c.width, h = c.height;
        c.width = width;
        c.height = height;

        console.log("width : " + width, "height : " + height);
        console.log("w : " + w, "h : " + h);
        console.log("c.width : " + c.width, "c.height : " + c.height);

        c.getContext('2d').drawImage(sourceVideo, 0, 0, width, height);
        ns.imageDataVideo = c.getContext('2d').getImageData(0, 0, width, height);
        localStorage['dataVideo'] = JSON.stringify(c.toDataURL('image/png'));

        c.width = w;
        c.height = h;

        console.log("ns.imageDataVideo : " + ns.imageDataVideo);
        console.log("Mise à memoire de  l'image effectuée avec succès !");
    };

    //Routine de sauvegarde du contenu de canvas dans le localStorage
    ns.contentCanvasToLocalStorage = function (sourceCanvas, width, height) {
        console.log("Mise à memoire de  l'image du canvas en cours...");
        console.log("width : " + width, "height : " + height);

        console.log("Suppression de l'image ns.imageDataVideo en mémoire ainsi que dans le localStorage en cours...");
        //ns.imageDataVideo = null;
        //delete localStorage['dataVideo'];
        console.log("Suppression de l'image ns.imageDataVideo en mémoire ainsi que dans le localStorage effectuée avec succès!");

        var w = sourceCanvas.width, h = sourceCanvas.height;
        sourceCanvas.width = width;
        sourceCanvas.height = height;

        console.log("Ajout de l'image dans le localStorage");
        var data = sourceCanvas.toDataURL('image/png');
        ns.imageDataCanvas = data;
        localStorage['dataCanvas'] = JSON.stringify(data);

        /*ns.imageDataCanvas = sourceCanvas.getContext('2d').getImageData(0, 0, width, height);
        ns.imageDataCanvas.data = ns.imageDataVideo.data;
        localStorage['dataCanvas'] = JSON.stringify(ns.imageDataCanvas);*/

        console.log('ns.imageDataCanvas.data : ' + ns.imageDataCanvas);

        sourceCanvas.width = w;
        sourceCanvas.height = h;
        console.log("Mise à memoire de  l'image effectuée avec succès !");
    };
    
    
    ns.drawEachCanvas2 = function (ImageDataCanvas, c) {
        console.log("Ajout de l'image capturée de la vidéo dans le canvas " + c + "(" + c.width + " x " + c.height + ") et le localStorage en cours ...");

        console.log("Traçage de l'image capturée de la vidéo dans le canvas " + c + "(" + ns.widthClient + " x " + ns.heightClient + ") en cours ...");
        c.getContext('2d').createImageData(ns.widthClient, ns.heightClient);
        c.getContext('2d').putImageData(ImageDataCanvas, 0, 0);
        console.log("Traçage de l'image capturée de la vidéo dans le canvas " + c + "(" + c.width + " x " + c.height + ") effectué avec succès !");
        console.log("Ajout de l'image capturée de la vidéo dans le canvas " + c + "(" + c.width + " x " + c.height + ") et le localStorage effectué avec succès !");
    };

    //Routine de suppression d'images des canvas dans le localStorage
    ns.deleteContentCanvasToLocalStorage = function () {
        console.log("Suppression d'images des canvas dans le localStorage en cours ...");
        var imagecanvas;

        for (var i = 1; i < 5; i++) {
            imagecanvas = 'imageCanvas' + i;
            if ((localStorage[imagecanvas]) !== undefined && (localStorage[imagecanvas]) != '') {
                delete localStorage[imagecanvas];
                console.log(imagecanvas + " supprimée!");
            }
        }

        console.log("Suppression d'images des canvas dans le localStorage effectuée avec succès!");
    };
        
    //Dessiner les images dans la nouvelle page
    ns.drawEachCanvasNewPage = function (c) {
        console.log("Récupération de l'image de la vidéo dans le localStorage en cours ...");
        c.getContext('2d').createImageData(ns.widthVideo, ns.heightVideo);
        c.getContext('2d').putImageData(ns.imageDataVideo, 0, 0);
        c.setAttribute('type', 'image/webp');
        
        $('input#donneeImage').val( ns.imageDataVideo.data);
        //$("#listCameras").listview("refresh");
        
        console.log("Traçage d'une image de localStorage effectuée avec succès !");

    };


    //Netoyage des canvas
    ns.deleteContentCanvasToImagespage = function () {
        var canv = document.getElementById('canv1'),
            ctxt = canv.getContext('2d');
        
        ctxt.clearRect(0, 0, 286, 215);
        if ($("#canv1")) {
            console.log("Suppression et reinitialisation du canvas canv1 en cours ...");
            $("#licanv1").remove("#canv1");
            $("#listImages").remove("#licanv1");

            $("#listImages").listview('refresh');

            console.log("Suppression et reinitialisation du canvas canv1 effectuées avec succès !");
        }
    };

    //Redimensionnement automatique des canvas    
    ns.redimCanvas3 = function () {
        var can1 = document.querySelector('canvas#can1'),
        can2 = document.querySelector('canvas#can2'),
        donneeImage = document.querySelector('#donneeImage'),
        largeurImage = document.querySelector('#largeurImage'),
        hauteurImage = document.querySelector('#hauteurImage');
        
        console.log("Redimensionnement des canvas de la page 'result' en cours ...");
        /*if (window.innerWidth > window.innerHeight) {
        	ns.can2.width = ns.can1.width = window.innerHeight / 1.15;
        	ns.can2.height = ns.can1.height = window.innerHeight / 2.25;
        } else {
        	ns.can2.width = ns.can1.width = window.innerWidth / 1.2;
        	ns.can2.height = ns.can1.height = window.innerWidth / 1.49;
        }*/
        
        can2.width = can1.width = 400; //ns.largeurImage;
        can2.height = can1.height = 400; //ns.hauteurImage;
        
        $("#listResult").listview("refresh");
        
        console.log('largeurImage.width : ' + largeurImage, 'largeurImage.height : ' + hauteurImage);
        console.log('donneImage: ' + donneeImage);
        console.log("Redimensionnement des canvas effectué avec succès !");
    };
    
    //ns.initialize();
   
})();//this.resultRecyclabiliteNamespace);
//});

