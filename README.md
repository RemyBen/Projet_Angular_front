# App de gestion de devoirs à rendre

L'application tourne sur Heroku à cette adresse: https://projet-angular-front.herokuapp.com/

Les points forts de notre projet:
- Le projet est hebergé en ligne
- On a utilisé plusieurs composants Angular materials comme le "mat-toolbar" pour le menu ou le "mat-card" pour le formulaire de connexion
- L'application a un menu "userfriendly"
- L'utilisateur peut se connecter via le bouton connexion qui redirige vers un formulaire de conenxion
- Le formulaire de connexion est optimisé avec les messages d'erreur adéquat, les credentials de connexion sont écrit en dur. Les codes fonctionnants: id: **Utilisateur1** mdp: **user**
- Pour éditer ou supprimer un devoir l'utilisateur doit se connecter, s'il ne l'est pas il est redirigé vers la page de connexion
- Lorsqu'un utilisateur est connecté, un message avec son identifiant apparait. De plus le bouton Connexion se transforme en Deconnexion
- Un utilisateur connecté peut se déconnecté et ne pourra plus éditer ou supprimer un devoir
- On peut peupler la base avec 1000 devoirs de test grâce au bouton "Peupler BD" utilisant un *forkJoin*