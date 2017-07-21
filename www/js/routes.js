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

  .state('quiz', {
    url: '/quiz',
    templateUrl: 'templates/quiz.html',
    controller: 'quizCtrl'
  })

  .state('classifications', {
    url: '/classifications',
    templateUrl: 'templates/classifications.html',
    controller: 'classificaEsCtrl'    
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
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

  .state('moreData', {
    url: '/moreData',
    templateUrl: 'templates/moreData.html',
    controller: 'maisDadosCtrl'
  })

  .state('photo', {
    url: '/photo',
    templateUrl: 'templates/photo.html',
    controller: 'fotoCtrl'
  })

  .state('classification', {
    url: '/classification',
    templateUrl: 'templates/classification.html',
    controller: 'classificaOCtrl'
  })

  .state('comoSaber', {
    url: '/page12',
    templateUrl: 'templates/comoSaber.html',
    controller: 'comoSaberCtrl'
  })

$urlRouterProvider.otherwise('/home')

});
