1. Récit utilisateur considéré
...

2. Diagramme de cas d'utilisation

    ![alt tag](https://cloud.githubusercontent.com/assets/16263495/12635570/a2caf8ae-c552-11e5-8cd9-a7850b13b723.png)


3. Description des cas d'utilisation de l'application TISIR :
    Dans les paragraphe qui suivent, nous décrivont les principaux cas d'utilisation présentement identifiés. 
    Ces cas d'utilisation sont les suivants : 
  
    - TISIR-UC01 : Prendre les images d'un objet
    - TISIR-UC02 : Mettre la vidéo en marche
    - TISIR-UC03 : Activer la caméra
    - TISIR-UC04 : Remplacer une image capturée de l'objet
    - TISIR-UC05 : Supprimer une image capturée de l'objet
    - TISIR-UC06 : Demander le bon bac poubelle pour le dépôt d'un objet
  
  3.1 TISIR-UC01 : Prendre les images d'un objet
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
        - L'utilisateur doit tenir son appareil mobile à une distance xx de l'objet et le placer de façon à ce que la vidéo présente
          la totalité de l'objet.
    
    3.1.7. Post-conditions
        - La photo d'une des principales façades (surfaces ou côtés) de l'objet est capturée.
    
    3.1.8. Scénario principal
        1- Le membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet et la vidéo montrant 
           l'objet est en cours. Rappelons que la forme de la plupart des objets considérés dans cette étude est soit cylindrique (canette)
           ou soit parallélépipède ou soit encore assimilable à un entonoir (pot de chocolat chaud) ou circulaire (couvercle du pot 
           de chocolat chaud). 
           Dans la vidéo, l'objet apparaît dans la position avec laquelle l'utilisateur l'a placé : hauteur, base supérieure ou base inférieure.
        
        2- Le membre d'une communauté de l'ÉTS capture l'image de la partie visible de l'objet sur la vidéo. Cette partie visible pourraît être
           la hauteur, la base supérieure ou la base inférieure de l'objet.
        
        3- L'application TISIR enregistre l'image capturée en bas de la vidéo et offre la possibilité à l'utilisateur de la remplacer à son gré.
           
           Le membre d'une communauté de l'ÉTS repète au plus 4 fois les étapes 2 et 3. Et ce dans le but de fournir à TISIR, les images des 
           divers côtés de l'objet :
           - hauteur : côtés caché et visible,
           - la base supérieure et/ou
           - la base inférieure.
           
        4- Le membre d'une communauté de l'ÉTS quitte l'application ou décide de vérifier la recyclabilité de l'objet dont il a pris 
           les images (voir le cas d'utilisation TISIR-UC04, "Demander le bon bac poubelle pour le dépôt d'un objet") ou encore peut remplacer 
           ou supprimer une image capturée (voir les cas d'utilisation TISIR-UC04 et TISIR-UC05 pour de détail).
        
    3.1.9. SCÉNARIOS ALTERNATIFS : 
      a- Le membre d'une communauté de l'ÉTS abandonne la prise d'images :
      
         * S'il quitte le site et ferme le navigateur :
           - Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la recyclabilité
             et reprendre à l'étape 1 du scénatios principale (2.1.9.)
      
         * S'il quitte la page de vérification de la recyclabilité d'un objet pour une autre page de TISIR :
           - À son retour sur la page de recyclabilité, le membre d'une communauté de l'ÉTS reprend à l'étape où il a laissé.
           
      b- La batérie de l'appareil mobile ou de l'ordinateur portable du membre d'une communauté de l'ÉTS est soudainement déchargée :
         
         * Le membre d'une communauté de l'ÉTS accède de nouveau au site et plus précisement à la page de vérification de la recyclabilité
           et reprendre à l'étape 1 du scénario principal (2.1.9.)
      
      c- Les images de certaines surfaces de l'objet sont absentes :

         * Le membre d'une communauté de l'ÉTS reprend à l'étape 3.
 
 3.2 TISIR-UC02 : Mettre la vidéo en marche
    
    3.2.5. Pré-conditions
        - Le Membre d'une communauté de l'ÉTS doit autoriser TISIR de mettre en marche la caméra ou webcam de son appareil.
        
    3.2.7. Scénario principal
        1- Le membre d'une communauté de l'ÉTS est sur la page de vérification de la recyclabilité d'un objet. Il place un objet 
           à une distance et à une position décidement pré-définies de la caméra ou webcam de son appareil puis il met 
           en marche la vidéo.
        
        2- L'application TISIR allume la caméra et montre en live l'objet. Il indique aussi à l'utilisateur, à titre de rappel, 
           les principaux endroits de l'objet qu'il faudrait capturer l'image. Ces endoits facilitent l'extraction des caractéristiques
           de l'images telles que la hauteur, la couleur, l'épaisseur, ... qui seront utilisées pour la reconnaissance de l'objet.
           
        3- Pour chaque endroit ou façade indiqué par TISIR, l'utilisateur met l'objet dans la bonne position et capture une image.
        
        4- TISIR affiche chacune de ses images capturées par la Membre d'une communauté de l'ÉTS.
        
3.3 TISIR-UC03 : Activer la caméra


3.4 TISIR-UC04 : Remplacer une image capturée de l'objet
    
    
3.5 TISIR-UC05 : Supprimer une image capturée de l'objet
    
    
3.6 TISIR-UC06 : Demander le bon bac poubelle pour le dépôt d'un objet      
  
  3.6.9. SCÉNARIOS ALTERNATIFS :
    a- L'appareil mobile ou l'ordinateur portable du membre d'une communauté de l'ÉTS perd sa connexion internet.