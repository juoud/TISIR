/* global recyclabiliteNamespace, MediaStreamTrack */

﻿/// <reference path="configurationMobileTISISRrecyclage.js" />

//Références : 
///http:|//www.lilleweb.fr/js/2014/08/14/manipuler-sa-webcam/
///https|//://openclassrooms.com/forum/sujet/sauvegarder-le-contenu-d-un-canvas-66872
///http:|//www.w3schools.com/jquerymobile/jquerymobile_ref_icons.asp
///http:|//proquestcombo.safaribooksonline.com.res.banq.qc.ca/book/programming/javascript/9781430259459/chapter-8-video-to-video-using-webrtc/9781430259442_ch08_xhtml#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE0MzAyNTk0NTklMkY5NzgxNDMwMjU5NDQyX2NoMDNfeGh0bWwmcXVlcnk9
///http:|//w3c.github.io/mediacapture-scenarios/scenarios.html

//lien déployement
//https:|//9729fc11cd3230179c2b2d709e847895efc7f32d-www.googledrive.com/host/0B7CINczuwfBLakZDQ0JyYlk0MkU/recyclability.html

$(document).bind("mobileinit", function () {
    console.log("Page en cours d'initialisation...");
    $.mobile.loadingMessage = "Patientez s'il vous plait ...";
    recyclabiliteNamespace.initialize();
    console.log("Page initialisée par jquery mobile !");

});

$(document).on("updatelayout", "#recyclability", function (e) {
    e.preventDefault();
    if (!$("#cam1") && !$("#cam2")) {
        console.log("Mise en forme de la Page en cours ...");          
        //recyclabiliteNamespace.initialize();
        console.log("Recyclability Page !");
        console.log("Page mise en forme updatelayout !");
    }
    e.stopPropagation();
    
});

$(document).on("pagebeforeshow", "#recyclability", function (e) {
    e.preventDefault();
    
    if ($("#video")) {
        if (recyclabiliteNamespace.iCanvas > 0) {
            var canvas;
            //Dessiner les canvas
            if (recyclabiliteNamespace.iCanvas === 1) {
                //canvas = recyclabiliteNamespace.canvas1;
                recyclabiliteNamespace.drawEachCanvas(recyclabiliteNamespace.canvas1);
                
            }

            if (recyclabiliteNamespace.iCanvas === 2) {
                recyclabiliteNamespace.drawEachCanvas(recyclabiliteNamespace.canvas2);
            }

            if (recyclabiliteNamespace.iCanvas === 3) {
                recyclabiliteNamespace.drawEachCanvas(recyclabiliteNamespace.canvas3);
            }

            if (recyclabiliteNamespace.iCanvas === 4) {
                recyclabiliteNamespace.drawEachCanvas(recyclabiliteNamespace.canvas4);
            }

            
        }
     
    } 
    e.stopPropagation();
});

$(document).on("pageinit", "#recyclability", function (e) {
    //e.preventDefault();
    console.log("Initialisation de la Page en cours ...");
    if (!$("#cam1")) {
        //recyclabiliteNamespace.getCamera;
    }    
    console.log("Recyclability Page !");
    console.log("Page initialisée pageinit!");
    
    //e.stopPropagation();
    
});

$(document).on("pagebeforehide", "#recyclability", function (e) {
    e.preventDefault();
    console.log("Traitements avant la fermeture la Page recyclability en cours ...");
    console.log("recyclabiliteNamespace.imageDataCanva : " + recyclabiliteNamespace.imageDataCanva);
    //recyclabiliteNamespace.imageDataCanvas = null;
    console.log("recyclabiliteNamespace.imageDataCanva : " + recyclabiliteNamespace.imageDataCanva);
    console.log("Traitements avant la fermeture de la Page recyclability effectués avec succès!");

    e.stopPropagation();
});

/**********
$(document).on('click', '#listCameras #cam1', function (e) {
    e.preventDefault();
    recyclabiliteNamespace.playVideo2();
    e.stopPropagation();

});

$(document).on('click', '#listCameras #cam2', function (e) {
    e.preventDefault();
    recyclabiliteNamespace.playVideo2();
    e.stopPropagation();

});
***************/

$(document).on("pagebeforeshow", "#imagesObjetRecyclable", function(e) {
    e.preventDefault();
    console.log("Page imagesObjetRecyclable avant affichage!");
    //recyclabiliteNamespace.fetchImageForLocalStorage(recyclabiliteNamespace.iCanvas);

    console.log("Redimensionnement de canvas avant l'affichage de la Page imagesObjetRecyclable en cours ...");
    recyclabiliteNamespace.redimCanvas2();
    console.log("Redimensionnement de canvas avant l'affichage de la Page imagesObjetRecyclable effectué avec succès!");

    console.log("Ajout de l'image provenant de la vidéo au canvas en cours ...");
    recyclabiliteNamespace.drawEachCanvasNewPage(recyclabiliteNamespace.canv1);
    console.log("Ajout de l'image provenant de la vidéo au canvas effectué avec succès!");

    console.log("Page imagesObjetRecyclable prête pour l'affichage!");
    //console.log('e.dataTransfer.files[0] : ' + e.dataTransf.files[0]);
    

    e.stopPropagation();
});


$(document).on("pagebeforehide", "#imagesObjetRecyclable", function (e) {
    e.preventDefault();
    console.log("Traitements avant la fermeture la Page imagesObjetRecyclable en cours ...");
    
    recyclabiliteNamespace.contentCanvasToLocalStorage(recyclabiliteNamespace.canv1, recyclabiliteNamespace.widthClient, recyclabiliteNamespace.heightClient);

    console.log("Traitements avant la fermeture de la Page imagesObjetRecyclable effectués avec succès!");
    
    e.stopPropagation();
});

 /***************
$(document).on('click', '#divBack #back', function (e) {
    e.preventDefault();

    $.mobile.changePage("recyclability.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

    e.stopPropagation();
});

$(document).on('click', '#divBoutonCaptureImage #captureImageObjet', function (e) {
    //e.preventDefault();
    if ($("#video")) {

        recyclabiliteNamespace.iCanvas += 1;
        var canvas;
        //Dessiner les canvas
        if (recyclabiliteNamespace.iCanvas === 1) {
            canvas = recyclabiliteNamespace.canvas1;
        }

        if (recyclabiliteNamespace.iCanvas === 2) {
            canvas = recyclabiliteNamespace.canvas2;
        }

        if (recyclabiliteNamespace.iCanvas === 3) {
            canvas = recyclabiliteNamespace.canvas3;
        }

        if (recyclabiliteNamespace.iCanvas === 4) {
            canvas = recyclabiliteNamespace.canvas4;
        }

        recyclabiliteNamespace.contentVideoToLocalStorage(recyclabiliteNamespace.video, canvas, recyclabiliteNamespace.widthVideo, recyclabiliteNamespace.heightVideo);
        recyclabiliteNamespace.newPageForImages('Page images objets');
        
    } else {
        alert("Prière de lancer la vidéo bien avant de prendre une photo.");
        console.log("Prière de lancer la vidéo bien avant de prendre une photo.");
    }
    //e.stopPropagation();
});
****************/


(function () {
    this.recyclabiliteNamespace = this.recyclabiliteNamespace || {};
    var ns = this.recyclabiliteNamespace;

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia = navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia;


    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;   

    ns.dataSourceCanv4 = ns.dataSourceCanv4 || {};
    ns.dataSourceCanv3 = ns.dataSourceCanv3 || {};
    ns.dataSourceCanv2 = ns.dataSourceCanv2 || {};
    ns.dataSourceCanv = ns.dataSourceCanv || {};

    ns.iCanvas = 0;
        
    ns.video = ns.video || '';
    
    ns.widthVideo = 0; ns.heightVideo = 0;
    ns.widthClient = 0, ns.heightClient = 0;

    ns.canvas1 = ns.canvas1 || {}, ns.canvas2 = ns.canvas2 || {}, ns.canvas3 = ns.canvas3 || {}, ns.canvas4 = ns.canvas4 || {};
    ns.canv1 = ns.canv1 || {}, ns.canv2 = ns.canv2 || {}, ns.canv3 = ns.canv3 || {}, ns.canv4 = ns.canv4 || {};
    ns.can1 = ns.can1 || {}, ns.can2 = ns.can2 || {};
    
    ns.imageDataCanvas = ns.imageDataCanvas || {}, ns.imageDataVideo = ns.imageDataVideo || {};

    var cam = 0;

    ns.initialize = function () {
    	MediaStreamTrack.getSources;
        ns.deleteContentCanvasToLocalStorage();
        
        $(document).on('click', '#listCameras #cam1', function (e) {
            e.preventDefault();
            ns.playVideo2();
            e.stopPropagation();
        });

        $(document).on('click', '#listCameras #cam2', function (e) {
            e.preventDefault();
            ns.playVideo2();
            e.stopPropagation();
        });
        
        $(document).on('click', '#divBack #back', function (e) {
            e.preventDefault();

            $.mobile.changePage("recyclability.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

            e.stopPropagation();
        });
        
        $(document).on('click', '#divBoutonCaptureImage #captureImageObjet', function (e) {
            //e.preventDefault();
            if ($("#video")) {

                ns.iCanvas += 1;
                var canvas;
                //Dessiner les canvas
                if (ns.iCanvas === 1) {
                    canvas = ns.canvas1;
                }

                if (ns.iCanvas === 2) {
                    canvas = ns.canvas2;
                }

                if (ns.iCanvas === 3) {
                    canvas = ns.canvas3;
                }

                if (ns.iCanvas === 4) {
                    canvas = ns.canvas4;
                }

                ns.contentVideoToLocalStorage(ns.video, canvas, ns.widthVideo, ns.heightVideo);
                //ns.newPageForResult('Résultats de traitements');
                ns.newPageForImages('Page images objets');
                
            } else {
                alert("Prière de lancer la vidéo bien avant de prendre une photo.");
                console.log("Prière de lancer la vidéo bien avant de prendre une photo.");
            }
            //e.stopPropagation();
        });
        
        
        /*$(document).on('click', 'div #submitImage', function (e) {
        	var xhttp = new XMLHttpRequest();
        	xhttp.onreadystatechange = function() {
    		  if (xhttp.readyState == 4 && xhttp.status == 200) {
    		    $.mobile.changePage(newResultPage, { allowSamePageTransition: true, transition: 'none', reloadPage: false })
    		  }
        	};
        		
            ns.envoiImageAuServeur();
        });*/
        
        
        $(document).on('click', '#divBack1 #back1', function (e) {
            e.preventDefault();
            
            $.mobile.changePage("recyclability.html#imagesObjetRecyclable", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

            e.stopPropagation();
        });
        
        /*
         * 
         $(document).on('click', '#divBack1 #back1', function (e) {
            e.preventDefault();

            $.mobile.changePage("recyclability.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

            e.stopPropagation();
        });
        */
    };
    
    function initialize() {
        ns.initialize();
    }

    ns.playVideo2 = function playVideo(){
        //ns.video = video=document.querySelector('video');

        var contxt1 = ns.canvas1.getContext('2d');
        var contxt2 = ns.canvas2.getContext('2d');
        var contxt3 = ns.canvas3.getContext('2d');
        var contxt4 = ns.canvas4.getContext('2d');

        var indexCanvas = 0;

        var localMediaStream = null;
        var errBack = function (error) {
            console.log("Video capture error: ", error.code);
        };

        var hdConstraints = {
            video: {
                mandatory: {
                    maxWidth: ns.widthVideo,
                    maxHeight: ns.heightVideo,
                    minWidth: ns.widthVideo,
                    minHeight: ns.heightVideo
                }
            }
        };

        console.log("Démarrage de la vidéo ...");

        if (navigator.getUserMedia === undefined) {
            console.log("Le navigateur ne supporte pas getUserMedia");
            alert("Le navigateur ne supporte pas getUserMedia");
            console.log("Impossible de démarrage la vidéo ...");
        } else {
            //if (navigator.getUserMedia) {
            
                console.log("Vidéo en cours...");
                navigator.getUserMedia(hdConstraints, function (stream) {
                    ns.video.src = window.URL.createObjectURL(stream);
                   
                    console.log("Vidéo démarrée !");
            }, errBack);

            $(document).on('click', 'div #effacerPhotoObjet', function (e) {

                e.preventDefault();
                console.log('Élimination de contenu de tous les canvas en cours ...');
                contxt1.clearRect(0, 0, ns.canvas1.width, ns.canvas1.height);
                contxt2.clearRect(0, 0, ns.canvas2.width, ns.canvas2.height);
                contxt3.clearRect(0, 0, ns.canvas3.width, ns.canvas3.height);
                contxt4.clearRect(0, 0, ns.canvas4.width, ns.canvas4.height);
                console.log('Contenu de tous les canvas éffacé!');

                ns.iCanvas=0;
                console.log('Arrêt de vidéo en cours...');

                ns.video.pause();
                ns.video.src = "";
                
                if($("#cam1"))  {
                    $("#licam1").remove("#cam1");
                    $("#listCameras").remove("#licam1");
                }

                if($("#cam2"))  {
                    $("#licam2").remove("#cam2");
                    $("#listCameras").remove("#licam2");
                }

                if($("#video"))  {
                    $("#livideo").remove("#video");
                    $("#listCameras").remove("#livideo");
                }

                $("#listCameras").listview("refresh");

                console.log('Vidéo arrêté!');

                requestAnimationFrame(initialize);

                e.stopPropagation();
            });

        /*    $(document).on('click', 'div #submitImage', function (e) {
                e.preventDefault();

                console.log('Je ne suis pas encore opérationnel!');
                alert('Je ne suis pas encore opérationnel!');

                e.stopPropagation();

            });
            */
   
        } 

    };

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
            if ((localStorage[imagecanvas]) !== undefined && (localStorage[imagecanvas]) !== '') {
                delete localStorage[imagecanvas];
                console.log(imagecanvas + " supprimée!");
            }
        }

        console.log("Suppression d'images des canvas dans le localStorage effectuée avec succès!");
    };

    //Routine de récupération des images dans le localStorage avant la création de la page d'affichage
    ns.fetchImageForLocalStorage = function (indexCan) {
        console.log("Récupération d'images des canvas dans le localStorage en cours ...");
        var imageCanvas = 'imageCanvas' + indexCan;

        if ((localStorage[imageCanvas]) !== undefined && (localStorage[imageCanvas]) !== '') {
            if (indexCan === 1) {
                ns.dataSourceCanv =  JSON.parse( localStorage[imageCanvas]);
                console.log("imagecanvas1 récupérée et prête pour l'affichage : " );
            }
            
            if (indexCan === 2) {
                ns.dataSourceCanv2 = JSON.parse( localStorage[imageCanvas]);//localStorage[imageCanvas];
                console.log("imagecanvas2 récupérée et prête pour l'affichage : " );
            }

            if (indexCan === 3) {
                ns.dataSourceCanv3 = JSON.parse( localStorage[imageCanvas]); //localStorage[imageCanvas];
                console.log("imagecanvas3 récupérée et prête pour l'affichage : " );
            }

            if (indexCan === 4) {
                ns.dataSourceCanv4 = JSON.parse( localStorage[imageCanvas]); //localStorage[imageCanvas];
                console.log("imagecanvas4 récupérée et prête pour l'affichage : " );
            }
        }

        console.log("Récupération d'images des canvas dans le localStorage effectuée avec succès!");
    };

    //Création d'une page pour l'affichage des images
    ns.newPageForImages = function (title) {
        console.log("Création de la page des images.");
        //data-url="imagesObjet"
        imagesPage = ['<div data-role="page" id="imagesObjetRecyclable" data-add-back-btn="true">',
            '<div id="main">',
            '<div data-role="header" id="header2" data-position="fixed">',
                '<div data-role="navbar">',
                    '<ul>',
                        '<li id="lHome"><a id="defaultPage" data-icon="home">Accueil</a></li>',
                        '<li id="lRecyclability"><a id="recyclabPage" class="ui-btn-active ui-state-persist" data-icon="recycle">Recyclabilité</a></li>',
                        '<li id="lAboutTisir"><a id="aboutPage" data-icon="info">?</a></li>',
                    '</ul>',
                '</div>',
                '<h2>Image à soumettre</h2>',
            '</div>',
            
            '<div data-role="content">',
	            //'<!-- form method="post" action="envoiImage" enctype="multipart/form-data"-->',
	            //'<!--form method="get" action="envoiImage"-->',
                '<ul id="listImages" data-role="listview" data-inset="true">',
                        '<li id="liinfo"><div class="ui-block-a">',
                '<span id="infocanv1" style="margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;"></span>',
                '</div></li>',
                    '<li id="licanv1"><div class="ui-block-a">',
                        '<canvas id="canv1" name="canv1" class="audiovisuelle" style="margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;"></canvas><br />',
                    '</div></li>',
                '</ul> <br />',
                            
                '<form action="imageObjet" method="post">',
                    '<input id="donneeImage" name="donneeImage" type="text" value="" style="font-size:9pt; margin-top:0; margin-bottom:0; margin-left:auto; margin-right:auto; z-index:2000; pointer-events:none; border:0px;" />',
                    '<input id="largeurImage" name="largeurImage" type="text" value="" style="font-size:9pt; margin-top:0; margin-bottom:0; margin-left:auto; margin-right:auto; z-index:2000; pointer-events:none; border:0px;" />',                            
                    '<input id="hauteurImage" name="hauteurImage" type="text" value="" style="font-size:9pt; margin-top:0; margin-bottom:0; margin-left:auto; margin-right:auto; z-index:2000; pointer-events:none; border:0px;" />',
                    
                    '<!--div data-role="fieldContain"-->',

                      '<div class="ui-grid-a">',
                          '<div id="divBack" class="ui-block-a" style="width:26%; margin-left:auto; margin-right:auto;">',
                              '<input id="back" type="button" data-icon="back" data-add-back-btn="true" data-rel="back" value="Précédent" style="border:outset; z-index:9999;" />',
                          '</div>',
                          '<div class="ui-block-b" id="divSubmitImage" style="width:73%; margin-left:auto; margin-right:auto;">',
                              '<input id="submitImage" type="submit" data-icon="action" class="ui-btn-active" value="Déterminer si l\'objet est recyclable" style="border:outset; background-color:green; color:white; z-index:9000;" />',
                         '</div>',
                     '</div>',
                   '<!--/div-->',
	        '</form>',
           '</div>',
            '<div data-role="footer" data-position="fixed">',
                '<em>Copyright <abbr title="Web Tool for Information and Sorting Instructions of Recyclables">TISIR</abbr> &copy; DoBatI-ÉTS 2016</em>',
            '</div>',
        '</div>'].join(''),

        newImagesPage = $(imagesPage);

        //Append it
        newImagesPage.html(function (index, old) {
            return old
            .replace(/ID/g, title)
            .replace(/TITLE/g, title
            .replace(/-/g, 'Images Objet'));

        }).appendTo($.mobile.pageContainer);

        console.log("Ajout de la page des images à la page principale en cours...");
                
        $.mobile.changePage(newImagesPage, { allowSamePageTransition: true, transition: 'none', reloadPage: false });
        console.log("Page des images créée et ajoutée !");
    };
        
    //Dessiner les images dans la nouvelle page
    ns.drawEachCanvasNewPage = function (c) {
        console.log("Récupération de l'image de la vidéo dans le localStorage en cours ...");
        c.getContext('2d').createImageData(ns.widthVideo, ns.heightVideo);
        c.getContext('2d').putImageData(ns.imageDataVideo, 0, 0);
        c.setAttribute('type', 'image/webp');
        
        /* OLD (IMPORTANT)
         * $('input#donneeImage').val(JSON.parse( localStorage['dataVideo'])); //ns.imageDataVideo);
         * */
        $('input#donneeImage').val( ns.imageDataVideo.data);
        console.log("ns.imageDataVideo.data (DEMO): " + ns.imageDataVideo.data);
        
        $('input#largeurImage').val( ns.widthVideo);
        $('input#hauteurImage').val( ns.heightVideo);
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

    
    /*ns.newPageForResult = function (title) {
        console.log("Création de la page de résultat.");
        resultPage = ['<div data-role="page" data-url="result" id="result" data-add-back-btn="true">',
            '<div id="main">',
            '<div data-role="header" id="header2" data-position="fixed">',
                '<div data-role="navbar">',
                    '<ul>',
                        '<li id="lHome"><a id="defaultPage" data-icon="home">Accueil</a></li>',
                        '<li id="lRecyclability"><a id="recyclabPage" class="ui-btn-active ui-state-persist" data-icon="recycle">Recyclabilité</a></li>',
                        '<li id="lAboutTisir"><a id="aboutPage" data-icon="info">?</a></li>',
                    '</ul>',
                '</div>',
                '<h2>Résultat de traitements</h2>',
            '</div>',
            
            '<div data-role="content">',
	            '<form>',
		            '<ul id="listResult" data-role="listview" data-inset="true">',
			            '<li id="lican1"><div class="ui-block-a">',
	                    '<p id="message" style="color:green; margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;">Recyclable | Non recyclable</p>',
	                    '</div></li>', 
		            	'<li id="lican1"><div class="ui-block-b">',
		                    '<canvas id="can1" class="audiovisuelle"  style="margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;"></canvas>',
		                '</div></li>',
		                '<li id="lican2"><div class="ui-block-c">',
	                    '<canvas id="can2" class="audiovisuelle"  style="margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;"></canvas>',
	                '</div></li>',
		            '</ul> <br />',
	           
		            '<div data-role="fieldContain">',
	
			          '<div class="ui-grid-a">',
			                '<div id="divBack1" class="ui-block-a" style="width:26%; margin-left:auto; margin-right:auto;">',
			                    '<input id="back1" type="button" data-icon="back" data-add-back-btn="true" data-rel="back" value="Précédent" style="border:outset; z-index:9999;" />',
			                '</div>',
			                '<div class="ui-block-b" id="divSaveResult" style="width:73%; margin-left:auto; margin-right:auto;">',
			                    '<input id="nouvelle" type="button" data-icon="refresh" class="ui-btn-active" value="Nouvelle vérification" style="border:outset; background-color:green; color:white; z-index:9999;" />',
			               '</div>',
			           '</div>',
			        '</div>',
	           '</form>',
           '</div>',
            '<div data-role="footer" data-position="fixed">',
                '<em>Copyright <abbr title="Web Tool for Information and Sorting Instructions of Recyclables">TISIR</abbr> &copy; DoBatI-ÉTS 2016</em>',
            '</div>',
        '</div>'].join(''),

        newResultPage = $(resultPage);

        //Append it
        newResultPage.html(function (index, old) {
            return old
            .replace(/ID/g, title)
            .replace(/TITLE/g, title
            .replace(/-/g, 'Résultats traitement'));

        }).appendTo($.mobile.pageContainer);

        console.log("Ajout de la page des résultats à la page principale en cours...");
        //$.mobile.changePage(newResultPage, { allowSamePageTransition: true, transition: 'none', reloadPage: false })
        console.log("Page des résultats créée et ajoutée !");
    };
    */
    
    //Détection de l'existence de navigator.getUserMedia, source de code: [2]       
    function hasGetUserMedia() {
        return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    };
    
    // Liste de tous les microphones et cameras de la machine encours
    MediaStreamTrack.getSources = MediaStreamTrack.getSources(function (sourceInfos) {

                //Il faut créer une liste des cameras de la machine en cours...
                var list = "";

                for (var i = 0; i !== sourceInfos.length; ++i) {
                    var sourceInfo = sourceInfos[i];
                    if (sourceInfo.kind === 'video') {
                        cam++;
                        if (cam === 1) {//if (!$('#cam1')) {
                            console.log(sourceInfo.id + ', camera' + cam + ' création en cours : ' + sourceInfo.label);
                            list += "<li id='licam1'><input id='cam1' type='button' data-icon='photo' value='" + (sourceInfo.label || "Camera 1") + "' /></li>";
                            console.log(sourceInfo.id + ', camera' + cam + ' dont le libellé est : ' + sourceInfo.label + ' créée avec succès !');
                        } else if (cam === 2) {//if (!$('#cam1')) {
                            console.log(sourceInfo.id + ', camera' + cam + ' création en cours : ' + sourceInfo.label);
                            list += "<li id='licam2'><input id='cam2' type='button' data-icon='photo' value='" + (sourceInfo.label || "Camera 1") + "' /></li>";
                            console.log(sourceInfo.id + ', camera' + cam + ' dont le libellé est : ' + sourceInfo.label + ' créée avec succès !');
                        } else {
                            console.log(sourceInfo.id + ', camera' + cam + ' est une autre caméra dont le libéllé est : ' + sourceInfo.label);
                        }
                    } else {
                        console.log('Autre source multimédia : ' + sourceInfo);
                    }
                }
                list += "<li id='livideo'><div><video id='video' preload='metadata' class='audiovisuelle' style='margin-left:auto; margin-right:auto;' autoplay></video></div></li>";
                //list += "<li><div><video id='video' class='audiovisuelle' width='" + widthVideo + "' height='" + heightVideo + "' style='background:rgba(255,255,255,0.5); margin-left:auto; margin-right:auto;' type='video/webm' autoplay></video></div></li>";
                console.log("Rafraichissement de la liste des cameras et de la vidéo en cours ...");
                $("#listCameras").append(list);
                $("#listCameras").listview("refresh");
                console.log("Rafraichissement de la liste des cameras et de la vidéo effectué avec succès !");

                console.log("Redimensionnement de la vidéo et des canvas en cours ...");
                ns.redimCanvas();
                console.log("Redimensionnement de la vidéo et des canvas effectué avec succès !");
            });
        

    //Initialiser la page avec le bouton Annuler
    ns.canceledVideo = function canceledVideo() {
        var video = document.querySelector('video');

        console.log("Arrêt de vidéo en cours ...");
        video.src = "Vous avez arreté le flux";

        //Suppression de vidéo
        $("video").remove(":contains('video')");
        $("video").remove();

        if ($("#video")) {
            console.log('la balise vidéo existe');
            video.src = null;
            $("#listCameras").listview("refresh");
        } else {
            console.log("la balise vidéo n'existe");
            
            $("#listCameras").listview("refresh");
        }
    };

    //Redimensionnement automatique des canvas
    ns.redimCanvas = function () {
        ns.video = document.querySelector('video');
        ns.canvas1 = document.getElementById('canvas1');
        ns.canvas2 = document.getElementById('canvas2');
        ns.canvas3 = document.getElementById('canvas3');
        ns.canvas4 = document.getElementById('canvas4');

        console.log("Redimensionnement de la vidéo en cours ...");
        if (window.innerWidth > window.innerHeight) {
            ns.widthVideo = ns.video.width = Math.round(( window.innerHeight / 1.15));
            ns.heightVideo = ns.video.height = Math.round( (window.innerHeight / 2.25));
        } else {
            ns.widthVideo = ns.video.width = Math.round(( window.innerWidth / 1.2));
            ns.heightVideo = ns.video.height = Math.round(( window.innerWidth / 1.49));
        }
        console.log("Largeur de la vidéo : " + ns.widthVideo, "Hauteur de la vidéo : " + ns.heightVideo);
        console.log("Redimensionnement de la vidéo effectué avec succès !");

        console.log("Redimensionnement des canvas en cours ...");
        ns.canvas4.width = ns.canvas3.width = ns.canvas2.width = ns.canvas1.width = ns.widthClient = ns.widthVideo / 4.05;
        ns.canvas4.height = ns.canvas3.height = ns.canvas2.height = ns.canvas1.height = ns.heightClient = ns.heightVideo / 4.1;
        console.log("Largeur canvas : " + ns.widthClient, "Hauteur canvas : " + ns.heightClient);
        console.log("Redimensionnement des canvas effectué avec succès !");

        $("#listCameras").listview("refresh");
    };
    
    ns.redimCanvas2 = function () {
        ns.canv1 = document.getElementById('canv1');
        
        ns.canv1.width = ns.widthVideo;
        ns.canv1.height = ns.heightVideo;
        
        console.log('ns.canv1.width : ' + ns.canv1.width, 'ns.canv1.height : ' + ns.canv1.height);
    };
    
    ns.redimCanvas3 = function () {
        ns.can1 = document.getElementById('can1');
        ns.can2 = document.getElementById('can2');

        ns.can2.width = ns.can1.width = ns.widthVideo;
        ns.can2.height = ns.can1.height = ns.heightVideo;
        
        $("#listResult").listview("refresh");
        
        
        console.log('ns.can1.width : ' + ns.can1.width, 'ns.can1.height : ' + ns.can1.height);
    };
    
    ns.envoiImageAuServeur = function(){
    	console.log('Envoi de données au serveur en cours ...');
    	var xhr = new XMLHttpRequest();
    	xhr.open("post", "http://localhost:8080/tisirETS/envoiImage", true);
    	var boundary = Math.random().toString().substr(2);
    	xhr.setRequestHeader("content-type", 
    	    "multipart/form-data; charset=utf-8; boundary=" + boundary);
    	var multipart = "--" + boundary + "\r\n" +
    	    "Content-Disposition: form-data; name=donneeImage\r\n" +
    	    //"Content-type: image/png\r\n\r\n" +
    	    //canvas.toDataURL("image/png") + "\r\n" +
    	    ns.imageDataVideo.data +
    	    "--" + boundary + "--\r\n";
    	xhr.send(multipart);
    	console.log('Données envoyées au serveur!');
    };
    
    function sourceSelected(audioSource, videoSource) {
        var video = document.querySelector('video');
        var canvas = document.querySelector('canvas');
        var contxt = canvas.getContext('2d');

        var constraints = {
            audio: {
                optional: [{sourceId: audioSource}]
            },
            video: {
                mandatory: {
                    maxWidth: ns.widthVideo,
                    maxHeight: ns.heightVideo,
                    minWidth: ns.heightVideo,
                    minHeight: ns.heightVideo
                }, 
                optional: [{sourceId: videoSource}]
            }
        };

    }
   
})();

