angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('profileCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('loginCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('signupCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('quiz1Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('quiz2Ctrl', function ($scope, $stateParams) {})

.controller('photoCtrl', function ($scope, $stateParams) {})

.controller('classificationsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('classificationCtrl', ['$scope', '$stateParams', '$ionicHistory', function ($scope, $stateParams, $ionicHistory) {
  $scope.init = function () {
    $ionicHistory.clearCache();
  };
}])
