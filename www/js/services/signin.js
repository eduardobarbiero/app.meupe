'use strict';

angular.module('meu-pe.services')
  .factory('SignInService', function (HttpActions, AppConfig) {
    var url = "signin";

    function auth(data) {
      return HttpActions.without_auth(url, data, "GET");
    }

    function check() {
      return HttpActions(url + "/check", null, "GET");
    }

    return {
      auth: auth,
      check: check
    }
  });
