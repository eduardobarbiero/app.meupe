'use strict';

angular.module('meu-pe')
  .controller('SignUpController', function ($scope, $stateParams, $location, Notification, SignInService) {
    $scope.create = function (user) {
      SignInService.create(user).then(function (result) {
        $location.path('/');
        Notification.success({ message: "Usuário criado com sucesso! Bem vindo!", delay: 1000, replaceMessage: true });
      }).catch(function (error) {
        Notification.error({ message: "Falha ao criar usuário. Tente novamente.", delay: 1000, replaceMessage: true });
      });
    }
  })