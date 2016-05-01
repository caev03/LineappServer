var app = angular.module('RegistroApp', ['firebase','ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'views/turnos.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'views/actual.html',
            controller  : 'contactController'
        })
         .when('/signin', {
            templateUrl : 'views/signin.html',
            controller  : 'authController'
        })
           .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'authController'
        })

        .otherwise({
            redirectTo: '/'
        });
});


app.factory("Aut",function(FBURL, $firebaseAuth){
var ref = new Firebase("https://resplendent-inferno-6968.firebaseio.com");
  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);
  var Aut = {



  }

  return Aut;
});


app.controller('mainController', function($scope,$firebaseAuth){

});

app.controller('aboutController', function($scope){

});


app.controller('contactController', function($scope){

});

app.controller('authController', function($scope){
$scope.sesion = function(usuario){
console.log(usuario);
}
$scope.registro = function(usuario){
console.log(usuario);
}

});     




