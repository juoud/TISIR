1. Récit utilisateur considéré :
   En tant que membre d’une communauté de l’ÉTS, je souhaite déterminer si un objet ou un emballage (gobelet, bouteuille ou pot vide, etc) est recyclable après utilisation de son contenu, ce qui me permettrait de le déposer dans le bon bac à poubelle.

2. Diagramme de cas d'utilisation
À venir ...

3. Description du principal cas d'utilisation de l'application TISIR :
    Dans les paragraphe qui suivent, nous décrivons le principal cas d'utilisation émanant du précédent récit utilisateur :
    * TISIR-UC01 : Déterminer si un objet est recyclable 
    
  3.1. TISIR-UC01 : Déterminer si un objet est recyclable 
    3.1.1. Brève description
Un membre d'une communauté de l'ÉTS désire jeter un objet à la poubelle. Avec son téléphone portable connecté à  l'Internet, il accède à l'outil TISIR pour prendre une image de l'objet qu'il soumettra à un serveur. Ce serveur déterminera si l'objet est recyclable ou non.

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
        
        2- L'outil TISIR propose au membre d'une communauté de l'ÉTS, l'accès à la camera arrière (uniquement à la phase d'exploitation) de son appareil mobile.
        
        3- Le membre d'une communauté de l'ÉTS active la caméra qui met en marche la vidéo de l'objet qu'il souhaitait déterminer la recyclabilité. La vidéo étant en marche, le membre d'une communauté de l'ÉTS capture une image de la partie visible de l'objet. Cette partie visible de l'objet pourrait être la hauteur, la base supérieure ou la base inférieure de l'objet. 
           Elle peut avoir un fond coloré. Sur cette partie visible de l'objet capturée peut figurer aussi des symboles ayant différentes formes et couleurs. 
           
           Rappelons tout de même que la forme de la plupart des objets considérés dans cette étude est soit cylindrique (canette) ou soit parallélépipède ou soit encore assimilable à un entonnoir (pot de chocolat chaud) ou circulaire (couvercle du pot de chocolat chaud). La largeur et la hauteur de l'image de l'objet capturée sont celle de la vidéo.
        
        4- L'outil TISIR ouvre une nouvelle page sur laquelle elle affiche l'image capturée de l'objet. Sur cette page, TISIR  offre aussi au membre d'une communauté de l'ÉTS, une commande à partir de laquelle ce dernier peut vérifier si l'objet  figurant sur l'image est recyclable ou non.  
           
        5- Le membre d'une communauté de l'ÉTS lance la commande permettant de vérifier si l'objet sur l'image capturée est recyclable ou non.          
         
        6- TISIR procède aux traitements de l'image capturée en prenant pour paramètres les dimensions (largeur et hauteur) de cette dernière. À la fin des traitements, une nouvelle page contenant la réponse aux préoccupations de l'utilisateur ainsi que les informations justifiant cette réponse, s'affiche.
            
        7- Le membre d'une communauté de l'ÉTS suit les directives de TISIR et met l'objet dans le bac indiqué. L'utilisateur peut quitter l'application (en fermant son navigateur ou l'onglet correspondant), revenir sur l'image capturée ou procéder à la vérification d'un autre objet. Dans le dernier cas, il reprend à l'étape 1 du présent scénario.
        
    3.1.9. SCÉNARIOS ALTERNATIFS : 
      1a- Le membre d'une communauté de l'ÉTS ne souhaite pas mettre en marche la vidéo :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisément à la page de vérification de la recyclabilité et reprend à l'étape 1 du scénario principal.
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape 1 du scénario principal du présent cas d'utilisation.
      
      1b- Le membre d'une communauté de l'ÉTS abandonne volontairement la prise d'images :
      
         * S'il quitte le site et ferme le navigateur :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisément à la page de vérification de la recyclabilité et reprend à l'étape 1 du scénario principal du présent cas d'utilisation.
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
         
           1- À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape où il a laissé.
            1-1- S'il n'a pas encore lancer la vidéo, il reprends à l'étape du scénario principal.
            1-2- sinon, TISIR lui mets sur la dernière page qu'il a visité.  
           
      1c- L'appareil mobile du membre d'une communauté de l'ÉTS a perdu soudainement la connexion Internet :
         
           1- Le membre d'une communauté de l'ÉTS accède de nouveau au site et reprend à l'étape 1 du scénario principal du présent cas d'utilisation.
      
      2a- Aucune caméra n'est proposée :
      
         * TISIR identifie aucune caméra ou webcam sur l'appareil du membre d'une communauté de l'ÉTS.
           1- TISIR informe l'utilisateur de l'absence de la caméra sur son appareil mobile ou laptop.
           2- Le membre d'une communauté quitte l'application.
           
         * La page de vérification de la recyclabilité n'est pas bien rafraichie.
           1- Le membre d'une communauté de l'ÉTS rafraichit la page de vérification de la recyclabilité.
           2- TISIR affiche le nom d'une caméra embarquée ou bien une webcam connectée à son mobile.
           3- Le membre d'une communauté de l'ÉTS reprend à l'étape 3 du scénario principal.
 
      2b- Le navigateur de l'appareil du membre d'une communauté de l'ÉTS ne supporte pas les fonctionnalités multimédia de HTML5 et  plus précisément l'emploi de la camera pour le bon fonctionnement de la balise "video" :
         
         1- TISIR ne propose aucun accès à une caméra.
         2- Le membre d'une communauté de l'ÉTS quitte l'application et change le navigateur pour Google Chrome.
    
    3.1.10. Liste de technologie et de variations de données :
      3b- Seul le navigateur Google Chrome offre la possibilité d'accéder à la caméra embarquée des appareils mobile pour d'avoir une vidéo en live. 
          
    3.1.11. Exigences spéciales : 
       - L'image capturée doit présenter la totalité de la surface (hauteur ou base) visible considérée de l'objet.
       - Une capture d'image doit être enregistrée dans le canvas pour être visible à l'utilisateur en mois d'une seconde.
       - La hauteur de la vidéo doit être 
       - La largeur de la vidéo doit être 
       - les images capturées doivent avoir les mêmes dimensions de la vidéo.
       
    3.1.12. Fréquence de l'occurrence : Pourrait être pratiquement continue.
    
    3.1.13. Questions ouvertes : 
        1- Quelle est la bonne distance que doit avoir l'appareil mobile ou le laptop de l'utilisateur de l'objet soumis à la vérification de TISIR ?
        
        2- Dans quelle position l'utilisateur doit placer son appareil mobile ou son laptop pour lui permettre d'avoir une vidéo optimale de l'objet soumis à la vérification de TISIR ?
        
        3- Comment gérer la persistance des caractéristiques de différents objets soumis à TISIR ?

