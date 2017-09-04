'use strict';

angular.module('meu-pe')
  .controller('SignInController', function ($scope, $stateParams, $location, Notification, SignInService) {
    $scope.autenticate = function (user) {
      SignInService.auth(user).then(function (result) {
        if (result) {
          Notification.success({ message: "Logado com sucesso! Bem vindo!" });
        }
      });
    }
  })