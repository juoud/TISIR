1. Récit utilisateur considéré :
   En tant que membre d’une communauté de l’ÉTS, je souhaite savoir si un emballage (gobelet, bouteuille ou pot vide, etc) est 
   recyclable après utilisation de son contenu, ce qui me permettrait de le déposer dans le bon bac à poubelle.

2. Diagramme de cas d'utilisation

    ![alt tag](https://cloud.githubusercontent.com/assets/16263495/12650591/5eb8c63c-c5b1-11e5-986a-b81fc7303019.png)

3. Description des cas d'utilisation de l'application TISIR :
    Dans les paragraphe qui suivent, nous décrivont les principaux cas d'utilisation présentement identifiés. 
    Ces cas d'utilisation sont les suivants : 
  
    - TISIR-UC01 : Capturer une image de l'objet
    - TISIR-UC02 : Mettre la vidéo en marche
    - TISIR-UC03 : Activer la caméra
    - TISIR-UC04 : Remplacer une image capturée de l'objet
    - TISIR-UC05 : Supprimer une image capturée de l'objet
    - TISIR-UC06 : Demander le bon bac poubelle pour le dépôt d'un objet
  
  3.1 TISIR-UC01 : Capturer une image de l'objet
    3.1.1 Brève description
      Un membre de la communauté de l'ÉTS désire capturer les images de principaux côtés (surfaces) d'un objet  
      afin de les soumettre aux traitements et vérification de TISIR. TISIR utilise la caméra embarquée de l'appareil mobile 
      du de l'utilisateur pour fournir la vidéo en live de l'objet, lui permettant ainsi de capturer l'image.

    3.1.2. Portée
        Web Tool for Information and Sorting Instructions of Recyclables (TISIR).
    
    3.1.3. Acteur principal
        Membre d'une communauté de l'ÉTS : étudiant(e), enseignant(e), chargé(e) de cours ou un employé(e) de l'administration
    
    3.1.4. Acteur secondaire
        Caméra embarquée ou webcam d'un appareil mobile : fournit le service de video c'est à dire d'images en mouvement.
    
    3.1.5. Intéressés et Parties prenantes
        - Membre d'une communauté de l'ÉTS : souhaite connaître le bon bac à poubelle où déposer un objet.
        - Bureau de développement durable (BDD) de l'ÉTS : souhaite réduire le budget alloué au tri des recyclables 
          et sensibiliser les communautés de l'ÉTS sur la bonne pratique de tri et la gestion des recyclables.
        - Cafétériat de l'ÉTS : souhaite être parmi les tous premiers restaurants universitaires à doter d'un outil de gestion de développement durable.
    
    3.1.6. Pré-conditions
        - La vidéo de l'objet doit être en cours de marche.
        - L'utilisateur doit placer l'objet dans le dispositif réservé à cet effet. Ce dispositif sera placé sur chaque îlot de bacs 
          à poubelles du cafétériat de l'ÉTS.
        - L'utilisateur doit tenir son appareil mobile à une distance xx de l'objet.
    
    3.1.7. Post-conditions
        - L'image d'un principal côté de l'objet est capturée.
    
    3.1.8. Scénario principal
        1- Le membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet et la vidéo montrant 
           l'objet est en cours. Rappelons que la forme de la plupart des objets considérés dans cette étude est soit cylindrique 
           (canette) ou soit parallélépipède ou soit encore assimilable à un entonoir (pot de chocolat chaud) ou circulaire (couvercle
           du pot de chocolat chaud). 
           Dans la vidéo, l'objet apparaît dans la position avec laquelle l'utilisateur l'a placé : hauteur, base supérieure ou base 
           inférieure.
        
        2- Le membre d'une communauté de l'ÉTS capture l'image de la partie visible de l'objet sur la vidéo. Cette partie visible 
           pourraît être la hauteur, la base supérieure ou la base inférieure de l'objet.
        
        3- L'application TISIR enregistre l'image capturée en bas de la vidéo et offre la possibilité à l'utilisateur de la remplacer 
           ou la supprimer à son gré.
           
           Le membre d'une communauté de l'ÉTS repète au plus 4 fois les étapes 2 et 3. Et ce dans le but de fournir à TISIR, les 
           images des divers côtés de l'objet :
           - hauteur : côtés caché et visible,
           - la base supérieure et/ou
           - la base inférieure.
           
        4- Le membre d'une communauté de l'ÉTS quitte l'application ou décide de vérifier la recyclabilité de l'objet dont il a pris 
           les images (voir le cas d'utilisation TISIR-UC04, "Demander le bon bac poubelle pour le dépôt d'un objet") ou encore peut 
           remplacer ou supprimer une image capturée (voir les cas d'utilisation TISIR-UC04 et TISIR-UC05 pour de détail).
        
    3.1.9. SCÉNARIOS ALTERNATIFS : 
      1a- Le membre d'une communauté de l'ÉTS abandonne volontairement la prise d'images :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprendre à l'étape 1 du scénatios principale du cas d'utilisation "Mettre la vidéo en marche" 
             (voir  la
             section 3.2).
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape où il a laissé.
           
      1b- La batérie de l'appareil (mobile ou de l'ordinateur portable) du membre d'une communauté de l'ÉTS est soudainement 
          déchargée:
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprendre à l'étape 1 du scénario principal du cas d'utilisation "Mettre la vidéo en marche" 
             (voir la section 3.2).
      
      3a- Les images de certaines surfaces de l'objet sont absentes :
      
           1- Le membre d'une communauté de l'ÉTS reprend à l'étape 2.
    
      3b- Le navigateur de l'appareil du membre d'une communauté de l'ÉTS ne supporte pas les fonctionnalités muldimédia de HTML5 et            plus précisement l'emploi de la camera pour le bon fonctionnement de la balise "video" :
         
         1- TISIR ne capture pas d'image. 
         
         2- Le membre d'une communauté de l'ÉTS quitte l'application et change de navigateur pour Google Chrome.
    
    3.1.10. Liste de technologie et de variations de données :
      3b- Seul le navigateur Google Chrome offre la possibilité d'accéder à la caméra embarquée des appareils mobile pour d'avoir une 
          vidéo en live. 
          
    3.1.11. Exigences spéciales : 
       - L'image capturée doit présenter la totalité de la surface (hauteur ou base) visible considérée de l'objet.
       - Une capture d'image doit être enregistrée dans le canvas pour être visible à l'utilisateur en mois d'une seconde.
       - La vidéo et les images capturées doivent être contenues dans les dimensions de l'écran de l'utilisateur.
    
    3.1.12. Fréquence de l'occurrence : Pourraît être pratiquement continue.
    
    3.1.13. Questions ouvertes : 
        1- Quelle est la bonne distance que doit avoir l'appareil mobile ou le laptop de l'utilisateur de l'objet soumis à la 
           vérification de TISIR ?
        
        2- Dans quelle position l'utilisateur doit placer son appareil mobile ou son laptop pour lui permettre d'avoir une vidéo 
           optimale de l'objet soumis à la vérification de TISIR ?
        
        3- Comment gérer la persistence des caractéristiques de différents objets soumis à TISIR ?
        
    
 3.2 TISIR-UC02 : Mettre la vidéo en marche
    3.2.1 Brève description
        Un membre d'une communauté de l'ÉTS utilise la camera de son appareil mobile pour tourner la vidéo d'un objet. Le flux d'image
        fourni par cette vidéo sera utilisées pour la réalisation de cas d'utilisation TISIR-UC01.
      
    3.2.2. Portée
        Web Tool for Information and Sorting Instructions of Recyclables (TISIR).
    
    3.2.3. Acteur principal
        Membre d'une communauté de l'ÉTS : étudiant(e), enseignant(e), chargé(e) de cours ou un employé(e) de l'administration
    
    3.2.4. Acteur secondaire
        Caméra embarquée ou webcam d'un appareil mobile : fournit le service de video c'est à dire d'images en mouvement.
    
    3.2.5. Intéressés et Parties prenantes
        - Membre d'une communauté de l'ÉTS : souhaite avoir des séquences d'images d'une partie de l'objet pour lui permettre de faire           des captures. 
    
    3.2.6. Pré-conditions
        - Le Membre d'une communauté de l'ÉTS doit autoriser explicitement TISIR à mettre en marche la caméra ou webcam de son 
          appareil. Cette autorisation se fait à travers le cas d'utilisation TISIR-UC03.   
        - L'utilisateur doit placer l'objet dans le dispositif réservé à cet effet. Ce dispositif sera placé sur chaque îlot de bacs 
          à poubelles du cafétériat de l'ÉTS.
        - L'utilisateur doit tenir son appareil mobile à une distance xx de l'objet. 
    
    3.2.7. Post-conditions
        - Les séquences d'images de l'objet ou d'une partie de l'objet se défilent.
        
    3.2.8. Scénario principal
        1- Le membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet. Il place un objet 
           à une distance x et à une position décidément pré-définies de la caméra ou webcam de son appareil. Cette dernière est    
           initialement activée.
        
        2- L'application TISIR renvoie en live le flux d'images de l'objet. Il indique aussi à l'utilisateur, à titre de rappel, 
           les principaux endroits de l'objet dont il faudrait faire apparaître au premier plan sur la vidéo. Ces endoits permettront 
           de faciliter l'extraction des caractéristiques de l'images telles que la hauteur, la couleur, l'épaisseur et la teinture. 
           Ces caractéristiques seront utilisées pour la reconnaissance de l'objet.
           
        3- L'utilisateur change le côté de l'objet apparaissant au premier plan.
        
        4- Les étapes 2 et 3 se repètent autant de fois que possible.
        
        5- Le Membre d'une communauté de l'ÉTS quitte l'application ou décide de capturer les images de l'objet (voir la cas 
           d'utilisation TISIR-UC01).
   
   3.2.9. SCÉNARIOS ALTERNATIFS : 
      1a- Le membre d'une communauté de l'ÉTS abandonne volontairement la prise d'images :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprendre à l'étape 1 du scénatios principale du cas d'utilisation TISIR-UC02.
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS aperçoit toujours la video.
           
      1b- La batérie de l'appareil (mobile ou de l'ordinateur portable) du membre d'une communauté de l'ÉTS est soudainement 
          déchargée:
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprendre à l'étape 1 du scénario principal du cas d'utilisation "Activer la camera" 
             (voir la section 3.3).
    
      1c- Le navigateur de l'appareil du membre d'une communauté de l'ÉTS ne supporte pas les fonctionnalités muldimédia de HTML5 et            plus précisement l'emploi de la camera pour le bon fonctionnement de la balise "video" :
         
         1- TISIR ne renvoie aucune vidéo. 
         
         2- Le membre d'une communauté de l'ÉTS quitte l'application et change de navigateur pour Google Chrome.
      
      2a- La vidéo est floue :
      
        1- Le membre d'une communauté rafraichit la page de vérification de recyclabilité et active la camera (voir TISIR-UC02).
    
    3.2.10. Liste de technologie et de variations de données :
      3b- Seul le navigateur Google Chrome offre la possibilité d'accéder à la caméra embarquée des appareils mobile pour d'avoir une 
          vidéo en live. 
          
    3.2.11. Exigences spéciales : 
       - La vidéo renvoyée  doit présenter la totalité de la surface (hauteur ou base) visible considérée de l'objet.
       - La vidéo doit être contenue dans les dimensions de l'écran de l'utilisateur.
    
    3.2.12. Fréquence de l'occurrence : Pourraît être pratiquement continue.
    
    3.2.13. Questions ouvertes : 
        1- Quelle est la bonne distance que doit avoir l'appareil mobile ou le laptop de l'utilisateur de l'objet soumis à la 
           vérification de TISIR ?
        
        2- Dans quelle position l'utilisateur doit placer son appareil mobile ou son laptop pour lui permettre d'avoir une vidéo 
           optimale de l'objet soumis à la vérification de TISIR ?
        
        3- Comment gérer la persistence des caractéristiques de différents objets soumis à TISIR ?
       
        
3.3 TISIR-UC03 : Activer la caméra


3.4 TISIR-UC04 : Remplacer une image capturée de l'objet
    
    
3.5 TISIR-UC05 : Supprimer une image capturée de l'objet
    
    
3.6 TISIR-UC06 : Demander le bon bac poubelle pour le dépôt d'un objet      
  
  3.6.9. SCÉNARIOS ALTERNATIFS :
    a- L'appareil mobile ou l'ordinateur portable du membre d'une communauté de l'ÉTS perd sa connexion internet.
