/// <reference path="configurationMobileTISISRrecyclage.js" />

//Références : 
///http:|//www.lilleweb.fr/js/2014/08/14/manipuler-sa-webcam/
///https|//://openclassrooms.com/forum/sujet/sauvegarder-le-contenu-d-un-canvas-66872
///http:|//www.w3schools.com/jquerymobile/jquerymobile_ref_icons.asp
///http:|//proquestcombo.safaribooksonline.com.res.banq.qc.ca/book/programming/javascript/9781430259459/chapter-8-video-to-video-using-webrtc/9781430259442_ch08_xhtml#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE0MzAyNTk0NTklMkY5NzgxNDMwMjU5NDQyX2NoMDNfeGh0bWwmcXVlcnk9
///http:|//w3c.github.io/mediacapture-scenarios/scenarios.html

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
    if ($("#cam1") && !$("#cam2")) {
        console.log("avant l'affichage de la Page recyclability en cours ...");
        recyclabiliteNamespace.fetchImageForLocalStorage(recyclabiliteNamespace.iCanvas);
        
        console.log("Page recyclability fermée !");
        console.log("Page recyclability avant affichage !");
    }
    e.stopPropagation();
});

$(document).on("pageshow", "#recyclability", function (e) {
    e.preventDefault();
    if (!$("#cam1")) {
        console.log("Affichage de la Page en cours ...");
    //    recyclabiliteNamespace.getCamera;
        console.log("Page Affichée!");
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


$(document).on("pagebeforeshow", "#imagesObjetRecyclable", function(e) {
    e.preventDefault();
    console.log("Page imagesObjetRecyclable avant affichage!");
    recyclabiliteNamespace.fetchImageForLocalStorage(recyclabiliteNamespace.iCanvas);

    console.log("... Traitements relatifs au préaffichage de la Page imagesObjetRecyclable en cours ...");
    
    console.log("... Traitements relatifs au préaffichage de la Page imagesObjetRecyclable effectués avec succès!");
    console.log("Page imagesObjetRecyclable prête pour l'affichage!");
    
    recyclabiliteNamespace.drawEachCanvasNewPage(recyclabiliteNamespace.iCanvas);

    e.stopPropagation();

});


$(document).on("pagebeforehide", "#imagesObjetRecyclable", function (e) {
    e.preventDefault();
    console.log("Traitements avant la fermeture la Page imagesObjetRecyclable en cours ...");
    recyclabiliteNamespace.deleteContentCanvasToImagespage();
    console.log("Traitements avant la fermeture de la Page imagesObjetRecyclable effectués avec succès!");
    
    e.stopPropagation();
});

 
$(document).on('click', '#divBack #back', function (e) {
    e.preventDefault();

    $.mobile.changePage("recyclability.html", { allowSamePageTransition: true, transition: 'none', reloadPage: false });

    e.stopPropagation();
});

$(document).on('click', '#divBoutonCaptureImage #captureImageObjet', function (e) {
    
    if ($("#video")) {
        e.preventDefault();
        recyclabiliteNamespace.iCanvas++;
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

        recyclabiliteNamespace.drawEachCanvas(recyclabiliteNamespace.video, canvas, recyclabiliteNamespace.iCanvas);

        //Affichage de la page des images.
        console.log("Affichage de la page des images.");

        recyclabiliteNamespace.newPageForImages('Page images objets');
        e.stopPropagation();
    } else {
        alert("Prière de lancer la vidéo bien avant de prendre une photo.");
    }
    
});

(function () {
    this.recyclabiliteNamespace = this.recyclabiliteNamespace || {};
    var ns = this.recyclabiliteNamespace;

    navigator.getUserMedia = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

    var dataSourceCanv4, dataSourceCanv3, dataSourceCanv2, dataSourceCanv;

    ns.dataSourceCanv4 = dataSourceCanv4 || {};
    ns.dataSourceCanv3 = dataSourceCanv3 || {};
    ns.dataSourceCanv2 = dataSourceCanv2 || {};
    ns.dataSourceCanv = dataSourceCanv || {};

    var iCanvas=0;
    ns.iCanvas = iCanvas;

    var canvas1, canvas2, canvas3, canvas4;
    ns.canvas1 = canvas1 || {}, ns.canvas2 = canvas2 || {}, ns.canvas3 = canvas3 || {}, ns.canvas4 = canvas4 || {};
    var video;
    ns.video = video || {};
        
    var widthWindow = window.innerWidth, heightWindow = window.innerHeight;
    var widthVideo = widthWindow / (1.25), heightVideo = heightWindow / (5.2);

    var clientWidth, clientHeight;
    ns.clientWidth, ns.clientHeight;

    var cam = 0;

    ns.initialize = function () {    
        MediaStreamTrack.getSources;
        ns.deleteContentCanvasToLocalStorage();
    }
    
    ns.playVideo2 = function playVideo(){
        ns.video = video=document.querySelector('video');
        ns.clientWidth = clientWidth = ns.video.clientWidth, ns.clientHeight = clientHeight = ns.clientHeight;

        ns.redimCanvas();

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
                    maxWidth: 286,
                    maxHeight: 215,
                    minWidth: 286,
                    minHeight: 215
                }
            }
        };

        console.log("Démarrage de la vidéo ...");
        
        if (navigator.getUserMedia) {
               console.log("Vidéo en cours...");
               navigator.getUserMedia(hdConstraints, function (stream) {
                   video.src = window.URL.createObjectURL(stream);
                   
                   console.log("Vidéo démarrée!" + video.getCapabilities, video.getSettings);
            }, errBack);

            $(document).on('click', 'div #effacerPhotoObjet', function (e) {

                e.preventDefault();

                console.log('Élimination de contenu de tous les canvas en cours ...');
                contxt1.clearRect(0, 0, ns.canvas1.width, ns.canvas1.height);
                contxt2.clearRect(0, 0, ns.canvas2.width, ns.canvas2.height);
                contxt3.clearRect(0, 0, ns.canvas3.width, ns.canvas3.height);
                contxt4.clearRect(0, 0, ns.canvas4.width, ns.canvas4.height);
                console.log('Contenu de tous les canvas éffacé!');

                console.log('Arrêt de vidéo en cours...');
                
                ns.video.pause();
                //ns.video.stop();
                ns.video.src = ""; ns.video.src = null;
                //navigator.getUserMedia.stop;
                //requestAnimationFrame(MediaStreamTrack.getSources);
                console.log('Vidéo arrêté!');

                e.stopPropagation();

            });

            $(document).on('click', 'div #submitImage', function (e) {

                e.preventDefault();

                console.log('Je ne suis pas encore opérationnel!');
                alert('Je ne suis pas encore opérationnel!');

                e.stopPropagation();

            });
            
            

        } else {
            
            video.src = 'somevideo.webm'; // fallback.
            console.log("Échec de Démarrage de la vidéo...");
        }

    };

    //Routine de création des images dans les canvas 
    ns.drawEachCanvas = function (v, c, indexCan) {
        console.log("Ajout de l'image capturée de la vidéo dans le canvas " + c.id + " en cours ...");
        
        console.log('Video duration : ' + v.duration);
        console.log('Video taille du tampon : ' + v.buffered.length);
        console.log('Video taille du networkState : ' + v.networkState);

        console.log('video.clientWidth : ' + v.clientWidth);
        console.log('video.clientHeight : ' + v.clientHeight);
       
        c.getContext('2d').drawImage(v, 0, 0, 85, 69);//v.clientWidth/3.5, v.clientHeight/3.5);

        /*console.log("... Extraction de l'image du canvas afin de l'ajouter dans le localStorage en cours ...");
        var imagedata = c.getContext('2d').getImageData(0, 0, 85, 69);
        var data = imagedata.data;
        
        ns.contentCanvasToLocalStorage(imagedata.data, indexCan);
        console.log("... Image ajoutée dans le localStorage");*/

        ///Pour localStorage
        console.log("Ajout de l'image dans le localStorage");
        var data = c.toDataURL('image/png');
        ns.contentCanvasToLocalStorage(data, indexCan);
        console.log("Image ajoutée dans le localStorage");

        ///Pour l'affichage
        console.log('... Transformation de la capture de vidéo en image/png');
        data = c.toDataURL('image/png');
        c.setAttribute('src', data);
        c.setAttribute('type', 'image/webp');
        console.log("Ajout de l'image capturée de la vidéo dans le canvas et le localStorage " + c.id + " effectué avec succès.");
    };

   
    //Routine de sauvegarde du contenu des canvas dans localStorage
    ns.contentCanvasToLocalStorage = function (objetimage, indexCan) {
        console.log("Sérialisation et ajout du contenu du canvas dans le localStorage en cours ...");
        var imagecanvas = 'imageCanvas' + indexCan;
        localStorage[imagecanvas] = JSON.stringify(objetimage);
        console.log("Sérialistion et ajout du contenu du canvas dans le localStorage effectué avec succès.");
    };

    //Routine de suppression d'images des canvas dans le localStorage
    ns.deleteContentCanvasToLocalStorage = function () {
        console.log("Suppression d'images des canvas dans le localStorage en cours ...");
        var imagecanvas;
        for (var i = 1; i < 5; i++) {
            imagecanvas = 'imageCanvas' + i;
            if ((localStorage[imagecanvas]) != undefined && (localStorage[imagecanvas]) != '') {
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

        if ((localStorage[imageCanvas]) != undefined && (localStorage[imageCanvas]) != '') {
            if (indexCan == 1) {
                ns.dataSourceCanv =  JSON.parse( localStorage[imageCanvas]);
                console.log("imagecanvas1 récupérée et prête pour l'affichage : " );
            }
            
            if (indexCan == 2) {
                ns.dataSourceCanv2 = JSON.parse( localStorage[imageCanvas]);//localStorage[imageCanvas];
                console.log("imagecanvas2 récupérée et prête pour l'affichage : " );
            }

            if (indexCan == 3) {
                ns.dataSourceCanv3 = JSON.parse( localStorage[imageCanvas]); //localStorage[imageCanvas];
                console.log("imagecanvas3 récupérée et prête pour l'affichage : " );
            }

            if (indexCan == 4) {
                ns.dataSourceCanv4 = JSON.parse( localStorage[imageCanvas]); //localStorage[imageCanvas];
                console.log("imagecanvas4 récupérée et prête pour l'affichage : " );
            }
        }

        console.log("Récupération d'images des canvas dans le localStorage effectuée avec succès!");
    };

    //Création d'une page pour l'affichage des images
    ns.newPageForImages = function (title) {
        console.log("Création de la page des images.");
        imagesPage = ['<div data-role="page" data-url="imagesObjet" id="imagesObjetRecyclable" data-add-back-btn="true"',
            '<div id="main">',
            '<div data-role="header" id="header2" data-position="fixed">',
                '<div data-role="navbar">',
                    '<ul>',
                        '<li id="lHome"><a id="defaultPage" data-icon="home">Accueil</a></li>',
                        '<li id="lRecyclability"><a id="recyclabPage" class="ui-btn-active ui-state-persist" data-icon="recycle">Recyclabilité</a></li>',
                        '<li id="lAboutTisir"><a id="aboutPage" data-icon="info">?</a></li>',
                    '</ul>',
                '</div>',
                '<h2>Les images à souméttre</h2>',
            '</div>',
            '<div data-role="content">',
            '<ul id="listImages" data-role="listview" data-inset="true">',
                 '<li><div class="ui-block-a">',
                    '<canvas id="canv1" class="audiovisuelle"  style="border: 1px solid green; margin-left:auto; margin-right:auto; z-index:9999; pointer-events:none;"></canvas>',
                '</div></li>',
            '</ul> <br />',
           '</div>',
           '<div data-role="fieldContain">',

          '<div class="ui-grid-a">',
                '<div id="divBack" class="ui-block-a" style="width:26%; margin-left:auto; margin-right:auto;">',
                    '<input id="back" type="button" data-icon="back" data-add-back-btn="true" data-rel="back" value="Précédent" style="border:outset; z-index:5000;" />',
                '</div>',
                '<div class="ui-block-b" style="width:73%; margin-left:auto; margin-right:auto;">',
                    '<input id="submitImage" type="button" data-icon="action" class="ui-btn-active" value="Déterminer si l\'objet est recyclable" style="border:outset; background-color:green; color:white; z-index:5000;" />',
               '</div>',
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
            .replace(/-/g, 'Images Objet'))

        }).appendTo($.mobile.pageContainer);

        console.log("Ajout de la page des images à la page principale en cours...");
        $.mobile.changePage(newImagesPage, { allowSamePageTransition: true, transition: 'none', reloadPage: false })
        console.log("Page des images créée et ajoutée !");
    };
    
    //Dessiner les images dans la nouvelle page
    ns.drawEachCanvasNewPage = function (indexCan) {
        console.log("Traçage d'une image de localStorage en cours ...");
        var canv = document.getElementById('canv1');
        var dataImageData;

        canv.width = 275;
        canv.height = 215;
        
        if (indexCan == 1) {
            console.log("Traçage de l'image ns.dataSourceCanv de localStorage  en cours ... ");
            dataImageData = ns.dataSourceCanv;    
            console.log("Image ns.dataSourceCanv de localStorage tracée dans la nouvelle page avec succès : ");
        }

        if (indexCan == 2) {
            console.log("Traçage de l'image ns.dataSourceCanv2 de localStorage  en cours ... ");
            dataImageData = ns.dataSourceCanv2;
            console.log("Image ns.dataSourceCanv2 de localStorage tracée dans la nouvelle page avec succès : " );
        }

        if (indexCan == 3) {
            console.log("Traçage de l'image ns.dataSourceCanv3 de localStorage  en cours ... ");
            dataImageData = ns.dataSourceCanv3;
            console.log("Image ns.dataSourceCanv3 de localStorage tracée dans la nouvelle page avec succès : " );
        }

        if (indexCan == 4) {
            console.log("Traçage de l'image ns.dataSourceCanv4 de localStorage  en cours ... ");
            dataImageData = ns.dataSourceCanv4;
            console.log("Image ns.dataSourceCanv4 de localStorage tracée dans la nouvelle page avec succès : " );
        }

        ns.drawEachCanvasPageImage(canv, dataImageData);
        console.log("Traçage d'une image de localStorage effectuée avec succès !");

        $("#listImages").listview('refresh');
    }

    ///Ajout des images aux canvas de la nouvelle page
    ns.drawEachCanvasPageImage = function (c, dataSrce) {
        console.log("Création et traçage d'une image du localStorage en cours ...");

        var imageSource = new Image();
        imageSource.src = dataSrce;

        imageSource.onload = function () {
            c.getContext('2d').drawImage(imageSource, 0, 0, c.width, c.height);
        }

        console.log('Transformation de la capture de vidéo en image/png');
        var data = c.toDataURL('image/png', 0.99);
        c.setAttribute('src', data);
        
        /*var img = document.createElement("img");
        img.width = c.width / 3.5;
        img.height = c.height / 3.5;
        img.src = data;
        $("#imagesObjetRecyclable .ui-grid-a").append(img);*/

        console.log("Création et traçage d'une image du localStorage effectués avec succès.");
    };

    ns.drawEachCanvasPageImage_OLD = function (c, dataSrce) {
        console.log("Création et traçage d'une image du localStorage en cours ...");
        console.log("c.width : " + c.width + ", c.height : " + c.height);
        var imageData = c.getContext('2d').createImageData(c.width, c.height);
        console.log("dataSrce = dataImagedata : " + dataSrce);

        imageData.data = dataSrce;
        c.getContext('2d').putImageData(imageData, 0, 0);
        console.log("Création et traçage d'une image du localStorage effectuées avec succès !");
    };

    ns.drawEachCanvasPageImageOLD = function (c, dataSrce) {
        console.log("Création et traçage d'une image du localStorage en cours ...");

        var imageSource = new Image();
            imageSource.src = dataSrce;
            
            imageSource.onload = function () {                
                c.getContext('2d').drawImage(imageSource, 0, 0, c.width, c.height);
            }
            
        console.log('Transformation de la capture de vidéo en image/png');
        var data = c.toDataURL('image/png');
        c.setAttribute('src', data);

        console.log("data : " + data);
        console.log("data:length :" + data.length);
        var bytes = [];
        var charCode;

        for (var i = 0; i < data.lenght; i++) {
            charCode = data.charCodeAt(i);
            bytes.push((charCode & 0xFF00) >> 8);
            bytes.push(charCode & 0xFF);
        }

        console.log("data en bytes : " + bytes);
        var imagedata = c.getContext('2d').getImageData(0, 0, c.width, c.height);
        var data1 = imagedata.data;
        for (var i = 0; i < bytes.lenght; i++) {
            data[i] = bytes[i];
        }
         
         console.log("imagedata.data :" + imagedata.data);
         c.getContext('2d').putImageData(imagedata, c.width, c.height)

        console.log("Création et traçage d'une image du localStorage effectués avec succès.");
    };

    //Netoyage des canvas
    ns.deleteContentCanvasToImagespage = function () {
        var canv = document.getElementById('canv1'),
            ctxt = canv.getContext('2d');
        
        ctxt.clearRect(0, 0, 286, 215);
    }

    //Détection de l'existence de navigator.getUserMedia, source de code: [2]       
    function hasGetUserMedia() {
        return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
    };
    
    // Liste de tous les microphones et cameras de la machine encours
    MediaStreamTrack.getSources = MediaStreamTrack.getSources(function (sourceInfos) {
        var audioSource = null;
        var videoSource = null;

        //Il faut créer une liste des cameras de la machine en cours...
        var list = "";

        ns.redimCanvas();

        for (var i = 0; i != sourceInfos.length; ++i) {
            var sourceInfo = sourceInfos[i];
            if (sourceInfo.kind === 'video') {
                cam++;                
                if (cam == 1) {//if (!$('#cam1')) {
                    console.log(sourceInfo.id + ', camera' + cam + ' création en cours : ' + sourceInfo.label);
                    list += "<li id='webcam'><input id='cam1' type='button' data-icon='photo' value='" + (sourceInfo.label || "Camera 1") + "' /></li>";
                    console.log(sourceInfo.id + ', camera' + cam + ' dont le libellé est : ' + sourceInfo.label + ' créée avec succès !');
                } else if (cam == 2) {//if (!$('#cam1')) {
                    console.log(sourceInfo.id + ', camera' + cam + ' création en cours : ' + sourceInfo.label);
                    list += "<li id='webcam'><input id='cam2' type='button' data-icon='photo' value='" + (sourceInfo.label || "Camera 1") + "' /></li>";
                    console.log(sourceInfo.id + ', camera' + cam + ' dont le libellé est : ' + sourceInfo.label + ' créée avec succès !');
                } else {
                    console.log(sourceInfo.id + ', camera' + cam + ' est une autre caméra dont le libéllé est : ' + sourceInfo.label);
                }
            } else {
                console.log('Autre source multimédia : ' + sourceInfo);
            }
        }
        list += "<li><div><video id='video' preload='metadata' class='audiovisuelle' width='286' height='215' style='margin-left:auto; margin-right:auto; padding:auto;' autoplay></video></div></li>";
        //list += "<li><div><video id='video' class='audiovisuelle' width='" + widthVideo + "' height='" + heightVideo + "' style='background:rgba(255,255,255,0.5); margin-left:auto; margin-right:auto;' type='video/webm' autoplay></video></div></li>";
        $("#listCameras").append(list);
        $("#listCameras").listview("refresh");
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
        var widthWindow = window.innerWidth, heightWindow = window.innerHeight;
        ns.canvas1 = document.getElementById('canvas1');
        ns.canvas2 = document.getElementById('canvas2');
        ns.canvas3 = document.getElementById('canvas3');
        ns.canvas4 = document.getElementById('canvas4');

        ns.canvas4.width = ns.canvas3.width = ns.canvas2.width = ns.canvas1.width = widthWindow / (4.6);
        ns.canvas4.height = ns.canvas3.height = ns.canvas2.height = ns.canvas1.height = heightWindow / (9.2);
    }
    
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
                    maxWidth: 286,
                    maxHeight: 215,
                    minWidth: 286,
                    minHeight: 215
                }, 
                optional: [{sourceId: videoSource}]
            }
        };

    }
   
})();

