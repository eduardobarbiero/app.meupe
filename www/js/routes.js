angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      .state('tabsController.questionRio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/questionRio.html',
        controller: 'questionRioCtrl'
      }
    }
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

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('entrar', {
    url: '/page5',
    templateUrl: 'templates/entrar.html',
    controller: 'entrarCtrl'
  })

  .state('introduO', {
    url: '/',
    templateUrl: 'templates/introduO.html'
  })

  .state('registro', {
    url: '/signup',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.classificaO'
      2) Using $state.go programatically:
        $state.go('tabsController.classificaO');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
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

  .state('galeria', {
    url: '/page13',
    templateUrl: 'templates/galeria.html',
    controller: 'galeriaCtrl'
  })

$urlRouterProvider.otherwise('/')



});
