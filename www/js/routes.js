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

  .state('tabsController.classificaEs', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/classificaEs.html',
        controller: 'classificaEsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/classificaEs.html',
        controller: 'classificaEsCtrl'
      }
    }
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
  
  .state('tabsController.maisDados', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/maisDados.html',
        controller: 'maisDadosCtrl'
      }
    }
  })

  .state('tabsController.foto', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/foto.html',
        controller: 'fotoCtrl'
      }
    }
  })
  
  .state('tabsController.classificaO', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/classificaO.html',
        controller: 'classificaOCtrl'
      },
      'tab2': {
        templateUrl: 'templates/classificaO.html',
        controller: 'classificaOCtrl'
      }
    }
  })

  .state('comoSaber', {
    url: '/page12',
    templateUrl: 'templates/comoSaber.html',
    controller: 'comoSaberCtrl'
  })

$urlRouterProvider.otherwise('/home')

});
