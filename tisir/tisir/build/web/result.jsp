<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Résultat de vérification de votre objet</title>
    <link href="Scripts/jquery.mobile-1.4.5/jquery.mobile-1.4.5.css" rel="stylesheet" />
    <!--link rel="stylesheet" href="http:/\/code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" /-->

    <script src="Scripts/jquery-2.2.0.min.js"></script>
    <!--script src="http:\//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

    <script src="Scripts/commonLibrary.js"></script>
    <script src="Scripts/configurationMobileTISISRrecyclage.js"></script-->
    <!--script src="Scripts/result.js"></script-->
    
    <!--link href="CSS/default.css" rel="stylesheet" /-->
    
    <script src="Scripts/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
	<div data-role="page" id="result"> 
        <div id="main">
            <div data-role="header" id="header1" data-position="fixed">
                <div data-role="navbar">
                    <ul>
                        <li id="lHome"><a id="defaultPage" data-icon="home">Accueil</a></li>
                        <li id="lRecyclability"><a id="recyclabPage" data-icon="recycle">Recyclabilité</a></li>
                        <li id="lResult"><a id="resultat" class="ui-btn-active ui-state-persist" data-icon="none">Résultat</a></li>
                        <li id="lAboutTisir"><a id="aboutPage" data-icon="info">?</a></li>
                    </ul>
                </div>
                <h2 style="font-size: large; color: green;">TISIR - Résultat de la vérification</h2>
            </div>
            <div data-role="content">
                <h3 style="font-size: large; color: goldenrod;">À propos de votre objet :</h3>
                
                <form action="resultat" method="get">
                    <div data-role="fieldContain">
                        <ul id="listResult1" data-role="listview" data-inset="true">
                            <li id="lican10">
                                <div class="ui-block-a">
                                    <h4 id="message" class="{empty imageobjetForm.erreurs ? 'succes' :'erreur'}" style="color:crimson; margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;">${imageobjetForm.resultat}</h4>                                    
                                </div>
                            </li>                    
                        </ul> <br />
                        
                        <div align="center">
                            <em style="font-family:Impact;font-size:100pt; color: olivedrab">T</em><b style="font-family:Impact;font-size:40pt; color: olivedrab">ISIR _./_</b>
                        </div>
                        <!--div data-role="fieldContain">
                              <div class="ui-grid-a">
                                    <div id="divBack1" class="ui-block-a" style="width:26%; margin-left:auto; margin-right:auto;">
                                        <input id="back1" type="button" data-icon="back" data-add-back-btn="true" data-rel="back" value="Précédent" style="border:outset; z-index:9999;" />
                                    </div>
                                    <div class="ui-block-b" id="divNouvelleV" style="width:73%; margin-left:auto; margin-right:auto;">
                                        <input id="nouvelleV" type="button" data-icon="refresh" class="ui-btn-active" value="Nouvelle vérification" style="border:outset; background-color:green; color:white; z-index:9999;" />
                                   </div>
                              </div-->
                    </div>
                </form>
                   
            </div>
            <div data-role="footer" data-position="fixed">
                <em>Copyright <abbr title="Web Tool for Information and Sorting Instructions of Recyclables">TISIR</abbr> &copy; DoBatI-ÉTS 2016</em>
            </div>
        </div>
    </div>
                           
</body>
</html>
