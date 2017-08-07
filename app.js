(function() {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider.when("/", {

            templateUrl: "views/home.html"
        });

        $routeProvider.when("/gorilla", {

            templateUrl: "views/animal1.html",
            controller: "controllers/gorillaController"
        });

        $routeProvider.when("/duck", {

            templateUrl: "views/animal2.html",
            controller: "controllers/duckController"
        });

        $routeProvider.otherwise({
            templateUrl: "views/error.html"
        })
    })

})();