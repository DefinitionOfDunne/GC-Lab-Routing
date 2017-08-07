(function() {

    var app = angular.module("app");

    app.controller("controllers/duckController", function($scope) {

        $scope.animalTypes = ["elephant", "duck"];

    });

})();