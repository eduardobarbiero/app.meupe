'use strict';

angular.module('meu-pe')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController'
      })

      .state('quiz', {
        url: '/quiz',
        templateUrl: 'templates/quiz.html',
        controller: 'QuizController'
      })

      .state('sub-quiz', {
        url: '/sub-quiz',
        templateUrl: 'templates/subquiz.html',
        controller: 'SubQuizController'
      })

      .state('classifications', {
        url: '/classifications',
        templateUrl: 'templates/classifications.html',
        controller: 'ClassificationsController'
      })

      .state('signin', {
        url: '/signin',
        templateUrl: 'templates/signin.html',
        controller: 'SignInController'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignUpController'
      })

      .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html',
        controller: 'PhotoController'
      })

      .state('classification', {
        url: '/classification',
        templateUrl: 'templates/classification.html',
        controller: 'ClassificationController'
      })

    $urlRouterProvider.otherwise('/')

  });
