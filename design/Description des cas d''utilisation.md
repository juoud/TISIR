1. Récit utilisateur considéré :
   En tant que membre d’une communauté de l’ÉTS, je souhaite déterminer si un objet ou un emballage (gobelet, bouteuille ou pot vide, etc) est recyclable après utilisation de son contenu, ce qui me permettrait de le déposer dans le bon bac à poubelle.

2. Diagramme de cas d'utilisation
À venir ...

3. Description du principal cas d'utilisation de l'application TISIR :
    Dans les paragraphe qui suivent, nous décrivons le principal cas d'utilisation émanant du précédent récit utilisateur :
    * TISIR-UC01 : Déterminer si un objet est recyclable 
  
   3.1. TISIR-UC01 : Déterminer si un objet est recyclable 
    3.1.1. Brève description
       Un membre d'une communauté de l'ÉTS désire jeter un objet à la poubelle. Avec son téléphone portable connecté à 
       l'Internet, il accède à l'outil TISIR pour prendre une image de l'objet qu'il soumettra à un serveur. Ce serveur determinera si        l'objet est recyclable ou non.

    3.1.2. Portée
        Web Tool for Information and Sorting Instructions of Recyclables (TISIR).
    
    3.1.3. Acteur principal
        Membre d'une communauté de l'ÉTS : étudiant(e), enseignant(e), chargé(e) de cours ou un employé(e) de l'administration.
    
    3.1.4. Acteurs secondaires
        - Caméra embarquée ou webcam d'un appareil mobile : fournit le service de video c'est à dire d'images en mouvement;
        - Navigateur Web : propose au membre d'une communauté de l'ÉTS, le choix d'autoriser ou non la mise en marche de la caméra.
    
    3.1.5. Intéressés et Parties prenantes
        - Membre d'une communauté de l'ÉTS : souhaite connaître le bon bac à poubelle où déposer un objet.
        - Bureau de développement durable (BDD) de l'ÉTS : souhaite réduire le budget alloué au tri des recyclables 
          et sensibiliser les communautés de l'ÉTS sur la bonne pratique de tri et la gestion des recyclables.
        - Cafétériat de l'ÉTS : souhaite être parmi les tous premiers restaurants universitaires à doter d'un outil de gestion de 
          développement durable.
    
    3.1.6. Pré-conditions
        - L'appareil mobile de l'utilisateur est muni d'une caméra ou webcam;
        - Le navigateur Google chrome est installé sur l'appareil mobile de l'utilisateur; 
        - L'utilisateur doit placer l'objet dans le dispositif réservé à cet effet. Ce dispositif sera placé sur chaque îlot de bacs 
          à poubelles du cafétériat de l'ÉTS;
        - L'utilisateur doit tenir son appareil mobile à une distance convenable de telle sorte que l'objet soit apparu au grand 
          complet sur la vidéo.
        - Le Membre d'une communauté de l'ÉTS doit autoriser explicitement le navigateur à accepter la caméra de fonctionner.
    
    3.1.7. Post-conditions
        - L'image de l'objet capturée est vérifiée;
        - L'utilisateur est informé que l'objet est recyclable ou non.
    
    3.1.8. Scénario principal
        1- Le membre d'une communauté de l'ÉTS accède à l'outil TISIR et ouvre la page de vérification de la recyclabilité d'un objet.
        
        2- L'outil TISIR propose au membre d'une communauté de l'ÉTS, l'accès à la camera arrière (uniquement à la phase 
           d'exploitation) de son appareil mobile.
        
        3- Le membre d'une communauté de l'ÉTS active la caméra qui met en marche la vidéo de l'objet qu'il souhaitait déterminer la 
           recyclabilité. La vidéo étant en marche, le membre d'une communauté de l'ÉTS capture une image de la partie visible de 
           l'objet. Cette partie visible de l'objet pourraît être la hauteur, la base supérieure ou la base inférieure de l'objet. 
           Elle peut avoir un fond coloré. Sur cette partie visible de l'objet capturée peut figurer aussi des symboles ayant     
           différentes formes et couleurs. 
           
           Rappelons tout de même que la forme de la plupart des objets considérés dans cette étude est soit cylindrique 
           (canette) ou soit parallélépipède ou soit encore assimilable à un entonoir (pot de chocolat chaud) ou circulaire (couvercle
           du pot de chocolat chaud). La largeur et la hauteur de l'image de l'objet capturée sont celle de la vidéo.
        
        4- L'outil TISIR ouvre une nouvelle page sur laquelle elle affiche l'image capturée de l'objet. Sur cette page, TISIR   
           offre aussi au membre d'une communauté de l'ÉTS, une commande à partir de laquelle ce dernier peut vérifier si l'objet  
           figurant sur l'image est recyclable ou non.  
           
        5- Le membre d'une communauté de l'ÉTS lance la commande permettant de vérifier si l'objet sur l'image capturée est 
           recyclable ou non.          
         
        6- TISIR procède aux traitements de l'image capturée en prenant pour paramètres les dimensions (largeur et hauteur) de cette 
           dernière. À la fin des traitements, une nouvelle page contenant la réponse au préoccupation de l'utilisateur ainsi que les            informations justifiant cette réponse, est s'affichée.
            
        7- Le membre d'une communauté de l'ÉTS suit les directives de TISIR et met l'objet dans le bac indiqué. L'utilisateur peut 
           quitter l'application (en fermant son navigateur ou l'onglet correspondant), revenir sur l'image capturée ou procéder à la 
           vérification d'un autre objet. Dans le dernier cas, il reprend à l'étape 1 du présent sénario.
        
    3.1.9. SCÉNARIOS ALTERNATIFS : 
      1a- Le membre d'une communauté de l'ÉTS abandonne volontairement la prise d'images :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprend à l'étape 1 du scénatios principale du cas d'utilisation "Mettre la vidéo en marche" 
             (voir  la
             section 3.2).
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape où il a laissé.
           
      1b- La batérie de l'appareil (mobile ou de l'ordinateur portable) du membre d'une communauté de l'ÉTS est soudainement 
          déchargée:
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprend à l'étape 1 du scénario principal du cas d'utilisation "Mettre la vidéo en marche" 
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
       - La hauteur de la vidéo doit être 
       - La largeur de la vidéo doit être 
       - les images capturées doivent avoir les mêmes dimensions de la vidéo.
       
    3.1.12. Fréquence de l'occurrence : Pourraît être pratiquement continue.
    
    3.1.13. Questions ouvertes : 
        1- Quelle est la bonne distance que doit avoir l'appareil mobile ou le laptop de l'utilisateur de l'objet soumis à la 
           vérification de TISIR ?
        
        2- Dans quelle position l'utilisateur doit placer son appareil mobile ou son laptop pour lui permettre d'avoir une vidéo 
           optimale de l'objet soumis à la vérification de TISIR ?
        
        3- Comment gérer la persistence des caractéristiques de différents objets soumis à TISIR ?
        
    =======================================OLD======================================================
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
             recyclabilité et reprend à l'étape 1 du scénatios principale du cas d'utilisation TISIR-UC02.
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS aperçoit toujours la video.
           
      1b- La batérie de l'appareil (mobile ou de l'ordinateur portable) du membre d'une communauté de l'ÉTS est soudainement 
          déchargée:
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprend à l'étape 1 du scénario principal du cas d'utilisation "Activer la camera" 
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
3.3.1 Brève description
        Un membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet, l'accès 
        à une camera de son appareil mobile lui est proposée. Celui-ci met en marche la caméra qui lui fournit la vidéo (voir le cas 
        d'utilisation TISIR-UC02) de l'objet qu'il a entre les mains. De cette vidéo, l'utilisateur peut capturer (voir cas 
        d'utilisation TISIR-UC01) les images de certaines surfaces de l'objet.
      
    3.3.2. Portée
        Web Tool for Information and Sorting Instructions of Recyclables (TISIR).
    
    3.3.3. Acteur principal
        Membre d'une communauté de l'ÉTS : étudiant(e), enseignant(e), chargé(e) de cours ou un employé(e) de l'administration
    
    3.3.4. Acteur secondaire
        Caméra embarquée ou webcam d'un appareil mobile : fournit le service de video c'est à dire d'images en mouvement.
    
    3.3.5. Intéressés et Parties prenantes
        - Membre d'une communauté de l'ÉTS : souhaite utiliser une caméra de son mobile pour produire la vidéo d'un objet qu'il a 
          entre les mains. 
    
    3.3.6. Pré-conditions
        - Le Membre d'une communauté de l'ÉTS doit placer l'objet dans le dispositif réservé à cet effet. Ce dispositif sera placé sur           chaque îlot de bacs à poubelles du cafétériat de l'ÉTS.
        - L'utilisateur doit tenir son appareil mobile à une distance xx de l'objet. 
        - L'appareil mobile de l'utilisateur doit avoir une caméra embarquée ou une webcam connectée.
    
    3.3.7. Post-conditions
        - La caméra s'allume et affiche la vidéo.
        
    3.3.8. Scénario principal
        1- Le membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet. 
        
        2- TSIR affiche le nom d'une caméra embarquée ou bien une webcam connectée à son son mobile.
        
        3- Le membre d'une communauté de l'ÉTS place un objet   à une distance xx et à une position décidément pré-définies de la 
           caméra ou webcam de son appareil. Puis il active lance la caméra ou webcam par un cliquant sur le nom de cette dernière.
        
        4- L'application TISIR allume la caméra ou webcam et renvoie en live le flux d'images de l'objet. 
        
        5- Le Membre d'une communauté de l'ÉTS change de page ou quitte l'application ou encore décide d'explorer la vidéo (voir la 
           cas d'utilisation TISIR-UC02).
   
   3.3.9. SCÉNARIOS ALTERNATIFS : 
      1a- Le membre d'une communauté de l'ÉTS ne souhaite pas allumer la caméra :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprend à l'étape 1 du scénatios principale du cas d'utilisation TISIR-UC03.
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape 1 du scénatios 
              principale du cas d'utilisation TISIR-UC03.
           
      1b- La batérie de l'appareil (mobile ou de l'ordinateur portable) du membre d'une communauté de l'ÉTS est soudainement 
          déchargée:
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la 
             recyclabilité et reprend à l'étape 1 du scénario principal du cas d'utilisation "Activer la camera" 
             (voir la section 3.3).
    
      1c- Le navigateur de l'appareil du membre d'une communauté de l'ÉTS ne supporte pas les fonctionnalités muldimédia de HTML5 et            plus précisement l'emploi de la camera pour le bon fonctionnement de la balise "video" :
         
         1- TISIR ne renvoie aucun nom de caméra. 
         
         2- Le membre d'une communauté de l'ÉTS quitte l'application et change de navigateur pour Google Chrome.
      
      2a- Aucune caméra n'est proposée :
      
         * TISIR identifie aucune caméra ou webcam sur l'appareil membre d'une communauté de l'ÉTS.
           
           1- TISIR informe l'utilisateur de l'absence de caméra sur son appareil mobile ou laptop.
           
           2- Le membre d'une communauté reprend à l'étape 5 du scénario principal.
           
         * La page n'est pas bien rafraichie.
           1- Le membre d'une communauté de l'ÉTS rafraichit la page de vérification de recyclabilité.
           
           2- TISIR affiche le nom d'une caméra embarquée ou bien une webcam connectée à son son mobile.
           
           3- Le membre d'une communauté de l'ÉTS à l'étape 2 du scénario principal.
    
    3.3.10. Liste de technologie et de variations de données :
      3b- Seul le navigateur Google Chrome offre la possibilité d'accéder à la caméra embarquée des appareils mobile pour d'avoir une 
          vidéo en live. 
          
    3.3.11. Exigences spéciales : 
       - La vidéo renvoyée  doit présenter la totalité de la surface (hauteur ou base) visible considérée de l'objet.
       - La vidéo doit être contenue dans les dimensions de l'écran de l'utilisateur.
    
    3.3.12. Fréquence de l'occurrence : Pourraît être pratiquement continue.
    
    3.3.13. Questions ouvertes : 
        1- Quelle est la bonne distance que doit avoir l'appareil mobile ou le laptop de l'utilisateur de l'objet soumis à la 
           vérification de TISIR ?
        
        2- Dans quelle position l'utilisateur doit placer son appareil mobile ou son laptop pour lui permettre d'avoir une vidéo 
           optimale de l'objet soumis à la vérification de TISIR ?
        
        3- Comment gérer la persistence des caractéristiques de différents objets soumis à TISIR ?

3.4 TISIR-UC04 : Remplacer une image capturée de l'objet
    
    
3.5 TISIR-UC05 : Supprimer une image capturée de l'objet
    
    
3.6 TISIR-UC06 : Demander le bon bac poubelle pour le dépôt d'un objet      
  
  3.6.9. SCÉNARIOS ALTERNATIFS :
    a- L'appareil mobile ou l'ordinateur portable du membre d'une communauté de l'ÉTS perd sa connexion internet.
