angular.module('meu-pe-components', []);

angular.module('meu-pe-components')
  .provider('Auth', function () {
    this.$get = ["$cookies", "AuthService", "Notification", function ($cookies, AuthService, Notification) {
      var auth = function () {
      };

      auth.auth = function (data) {
        return AuthService.auth(data).then(function (result) {
          if (result && result.auth_token) {
            $cookies.put("CSRF-TOKEN", result.auth_token);
            Notification.success({ message: "Login efetuado com sucesso!", delay: 1000, replaceMessage: true });
            return true;
          } else {
            Notification.error({ message: "Ocorreu um problema ao efetuar o login!", delay: 1000, replaceMessage: true });
            return false;
          }
        });
      };

      auth.check = new Promise((resolve, reject) => {
        if (!$cookies.get("CSRF-TOKEN")) return reject(false);

        AuthService.check().then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject(false);
          }
        }).catch(function () { reject(false) });
      });
      return auth;
    }];
  })
  .provider('HttpActions', function () {
    this.$get = ["$http", "$q", "$httpParamSerializerJQLike", "AppConfig", "ERRORS", "Notification", "$cookies", "$location", function ($http, $q, $httpParamSerializerJQLike, AppConfig, ERRORS, Notification, $cookies, $location) {
      var http_action = function (url, params, method) {
        var csrf = $cookies.get("CSRF-TOKEN");
        return $http({
          url: AppConfig.api_url + url,
          method: method,
          data: params,
          paramSerializer: '$httpParamSerializerJQLike',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': (csrf ? csrf : null)
          }
        }).then(successCallback, errorCallback);
      };

      function successCallback(response) {
        return response.data;
      }

      function errorCallback(error) {
        callback_verify(error);
      }

      function callback_verify(error) {
        if (error.status == 401) {
          $location.path("/login");
        }

        if (error.status == 499) {
          if (error.data.errors.length)
            Notification.error({ message: generate_message(ERRORS[6].descricao, error.data.errors)});
        } else {
          for (var i = 0; i < Object.keys(ERRORS).length; i++) {
            if (ERRORS[i].codigo == error.status) {
              Notification.error({ message: generate_message(ERRORS[i].descricao, ERRORS[i].causasProvaveis)});
              return;
            }
          }
          Notification.error({ message: generate_message(ERRORS.default.descricao, ERRORS.default.causasProvaveis)});
        }
      }

      function generate_message(title, content) {
        var html = '<h5 style="color: #FFF; font-weight: bold;">' + title + '</h5>';
        html += '<div class="message" ng-bind-html="message"></div>';
        html += '<div class="message">';
        html += '    <ul>';
        if (content.length > 1) {
          angular.forEach(content, function (value) {
            html += '<li style="color: #FFF">' + value + '</li>';
          });
        } else {
          html += '<li style="color: #FFF">' + content + '</li>';
        }
        html += '    </ul>';
        html += '</div>';
        html += '<div class="message">';
        html += '</div>';
        return html;
      }

      http_action.without_auth = function (url, params, method) {
        return $http({
          url: AppConfig.api_url + url,
          method: method,
          params: params,
          paramSerializer: '$httpParamSerializerJQLike',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(successCallback, errorCallback);
      };

      return http_action;
    }];
  });
