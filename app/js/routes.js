angular.module('dacFccComments')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/fcc.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'app/views/about.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);