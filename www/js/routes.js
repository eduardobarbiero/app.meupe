angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('quiz1', {
    url: '/quiz1',
    templateUrl: 'templates/quiz1.html',
    controller: 'quiz1Ctrl'
  })

  .state('quiz2', {
    url: '/quiz2',
    templateUrl: 'templates/quiz2.html',
    controller: 'quiz2Ctrl'
  })

  .state('classifications', {
    url: '/classifications',
    templateUrl: 'templates/classifications.html',
    controller: 'classificationsCtrl'    
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('photo', {
    url: '/photo',
    templateUrl: 'templates/photo.html',
    controller: 'photoCtrl'
  })

  .state('classification', {
    url: '/classification',
    templateUrl: 'templates/classification.html',
    controller: 'classificationCtrl'
  })

$urlRouterProvider.otherwise('/home')

});
