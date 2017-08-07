(function() {

    var app = angular.module("app");

    app.controller("controllers/gorillaController", function($scope) {

        $scope.animalTypes = ["rhinoceros", "gorilla"];

    });

})();