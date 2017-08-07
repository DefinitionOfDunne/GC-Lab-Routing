(function() {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider.when("/", {

            templateUrl: "views/home.html"
        });

        $routeProvider.when("/gorilla", {

            templateUrl: "views/animal1.html"
        });

        $routeProvider.when("/duck", {

            templateUrl: "views/animal2.html"
        });

        $routeProvider.otherwise({
            templateUrl: "views/error.html"
        })
    })

})();