'use strict';

angular.module('meu-pe.directives')
  .directive('loading', function () {
    return {
      restrict: 'AE',
      template: '<div class="loading" />'
    };
  });