var tc = angular.module('tc',
  ['ngRoute',
  'appControllers'
  ]);

var appControllers = angular.module('appControllers',[]);

tc.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/single/:imageId', {
    templateUrl: 'assets/views/single.html',
    controller: 'GalleryController'
  }).
  when('/home', {
    templateUrl: 'assets/views/home.html',
    controller: 'GalleryController'
  }).
  when('/detailsrules', {
    templateUrl: 'assets/views/detailsrules.html',
    controller: 'StaticPageController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
