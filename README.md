# App de gestion de devoirs à rendre

L'application tourne sur Heroku à cette adresse: https://projet-angular-front.herokuapp.com/

Pour lancer le projet : 

- Cloner le projet
- Ouvrir un terminal
- Se rendre dans le repertoire Projet_Angular_back
- Lancer la commande "npm install" pour installer les dépendances
- Lancer la commande "npm run start" pour lancer le serveur
- Ouvrir un autre terminal
- Se rendre dans le repertoire Projet_Angular_front
- Lancer la commande "npm install" pour installer les dépendances
- Lancer la commande "ng serve" pour lancer la page web


Les points forts de notre projet:
- Le projet est hebergé en ligne
- On a utilisé plusieurs composants Angular materials comme le "mat-toolbar" pour le menu ou le "mat-card" pour le formulaire de connexion
- L'application a un menu "userfriendly"
- L'utilisateur peut se connecter via le bouton connexion qui redirige vers un formulaire de connexion
- Le formulaire de connexion est optimisé avec les messages d'erreur adéquat, les credentials de connexion sont écrit en dur. Les codes fonctionnants: id: **Utilisateur1** mdp: **user**
- Pour éditer ou supprimer un devoir l'utilisateur doit se connecter, s'il ne l'est pas il est redirigé vers la page de connexion
- Lorsqu'un utilisateur est connecté, un message avec son identifiant apparait. De plus le bouton Connexion se transforme en Deconnexion
- Un utilisateur connecté peut se déconnecté et ne pourra plus éditer ou supprimer un devoir
- On peut peupler la base avec 1000 devoirs de test grâce au bouton "Peupler BD" utilisant un *forkJoin*
- L'utilisateur peut ajouter un devoir via un formulaire
- Lorsque l'on ajoute un nouveau devoir celui ci est ajouté dans la base de données et est affiché dans la liste des devoirs

- Il y a un recap du nombre total d'assignments et le nombre total de page qui se modifie en fonction du nombre d'assignments que l'on souhaite afficher
- Il est possible de choisir via un Slider le nombre de d'assignments par page ( de 1 à 100 )
- Il y a 4 boutons :
     - Première :  qui permet de venir directement sur la premiere page
     - Précédent : qui permet de revenir sur la page précédente
     - Suivante : qui permet d'aller à la page suivante
     - Dernière : qui permet de se rendre directement à la dernière page 
     Chaque boutons sont actifs que si c'est possible ( ex : le bouton première page n'est pas actif si on se trouve deja sur celle-ci)
- Chaque manipulation de bouton / Slider envoie une requete au serveur qui effectue instantanement la requete et la modifie pour un affichage immédiat 
- Les assignments sont affichés dans une table angular material récapitulant les devoirs. On y retrouve:
    - L'id du devoir
    - Son nom
    - L'auteur
    - La matière
    - La note
    - Une remarque
    - La date de rendu
    - S'il a été rendu ou non
