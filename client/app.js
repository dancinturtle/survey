var beltExamTwo = angular.module('beltExamTwo', ['ngRoute']);

beltExamTwo.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html'
  })
  .when('/newPoll',{
    templateUrl: 'partials/newPoll.html'
  })
  .when('/takePoll/:id',{
    templateUrl: 'partials/takePoll.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
