'use strict';

angular.module('meu-pe.services')
  .factory('SignUpService', function (HttpActions, AppConfig) {
    var url = "signup";

    function index() {
      return HttpActions(url, null, "GET");
    }

    function create(data) {
      return HttpActions(url, data, "POST");
    }

    function update(data) {
      return HttpActions(url + '/' + data.id, data, "PUT");
    }

    return {
      index: index,
      create: create,
      update: update
    }
  });
