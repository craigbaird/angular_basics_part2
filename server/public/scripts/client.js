var myApp = angular.module("myApp", []);

myApp.controller("WelcomeController", ["$scope", function($scope){
    $scope.welcomeMessage = "Hello, welcome to our application";
}]);

myApp.controller("NameController", ["$scope", function($scope){
    $scope.greeting = "Hello";
    $scope.name = "";
    // var greeting = "Hello"; <- Wont work, only scoped to Javascript!
}]);
