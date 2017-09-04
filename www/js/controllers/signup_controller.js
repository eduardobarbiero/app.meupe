'use strict';

angular.module('meu-pe')
  .controller('SignUpController', function ($scope, $stateParams, $location, Notification, SignUpService) {
    $scope.create = function (user) {
      SignUpService.create(user).then(function (result) {
        if (result) {
          Notification.success({ message: "Usuário criado com sucesso! Bem vindo!" });
        }
      });
    }
  })