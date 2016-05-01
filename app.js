var app = angular.module('RegistroApp', ['firebase','ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })
        .when('/turnos', {
            templateUrl : 'views/turnos.html',
            controller  : 'turnosController'
        })
        .when('/atendidos', {
            templateUrl : 'views/actual.html',
            controller  : 'turnosController'
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


app.factory("Aut",function($firebaseAuth){
var ref = new Firebase("https://resplendent-inferno-6968.firebaseio.com");
  // create an instance of the authentication service
  var aut = $firebaseAuth(ref);


  var Aut = {
    registro: function(usuario){
        return aut.$createUser({
            email: usuario.email,
            password: usuario.pass
        });
     },
     sesion: function(usuario){
        return aut.$authWithPassword({
            email:usuario.email,
            password:usuario.pass
        });
     }
     
 }
return Aut;

});


app.controller('mainController', function($scope,$firebaseAuth){

});

app.controller('turnosController', function($scope){
$scope.turnos = [{name:"pedro",turno:1,atendido:false,comentario:""},{name:"ppedro",turno:2,atendido:true,comentario:"huehuehue"},{name:"pedro",turno:3,atendido:false,comentario:""}];
$scope.atender = function(turno){
console.log(turno);
 var index = $scope.turnos.indexOf(turno);
 console.log(index);
 $scope.turnos[index].atendido = true;
 console.log($scope.turnos[index]);

}


});


app.controller('contactController', function($scope){

});

app.controller('authController', function($scope, Aut){
$scope.registro = function(usuario){
Aut.registro(usuario).then(function(){
console.log("Usuario registrado");
}, function(error){
    console.log(error);
});
}

$scope.sesion = function(usuario){
Aut.sesion(usuario).then(function(){
console.log("Sesion iniciada");
}, function(error){
    console.log(error);
});
}


});     




