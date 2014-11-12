(function() {
  var app = angular.module('application', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'tables.html',
            controller : 'ListController',
            
        })
        .when('/boissons', {
                    templateUrl: 'boissons.html',
                    controller: 'Boissons',
                })
        .otherwise({
                    redirectTo: '/'
                });
});

 app.controller('Boissons', ['$scope', '$http', function($scope, $http){
    // Affichage de la liste des tables
    $scope.boissons = boissons;  

    // Fonction permettant l'affichage des détails
    $scope.toggle = function(boisson){
      // Requete GET pour réupérer les données de la table
      $http.get('/data1/' + boisson.name).success(function(data){
        //console.log(data);
        // enregistrement local des données
        boisson.id = data.id;
        boisson.fabricant = data.fabricant;
        boisson.logo = data.logo;
        boisson.type = data.type;
        boisson.descriptive = data.descriptive;
        // affichage des détails
        boisson.details = ! boisson.details;
      });      
    }

  }]);

  app.controller('ListController', ['$scope', '$http', function($scope, $http){
    // Affichage de la liste des tables
    $scope.tables = tables;  

    // Fonction permettant l'affichage des détails
    $scope.toggle = function(table){
      // Requete GET pour réupérer les données de la table
      $http.get('/data/' + table.name).success(function(data){
        //console.log(data);
        // enregistrement local des données
        table.id = data.id;
        table.nom = data.nom;
        table.mac = data.mac;
        table.etat = data.etat;
        table.lieu = data.lieu;
        table.fut = data.fut;
        table.fond = data.fond;
        // affichage des détails
        table.details = ! table.details;
      });      
    }

  }]);

var boissons = [
    {
      name : 'CocaCola',
      img : 'images/coca.png',
      details : false
    },
    {
      name : 'PepsiCola',
      img : 'images/pepsi.png',
      details : false
    }
    ];


  var tables = [
    {
      name : 'Soukaina',
      img : 'images/table1.png',
      details : false
    },
    {
      name : 'Salim',
      img : 'images/table2.png',
      details : false
    }
    ];
})();
