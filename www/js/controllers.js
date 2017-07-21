angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('profileCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('quizCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('classificaEsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('loginCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('signupCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('maisDadosCtrl', function ($scope, $stateParams) {
})

.controller('fotoCtrl', function ($scope, $stateParams) {

})

.controller('comoSaberCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {}])

.controller('slidermainCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', function ($scope, $stateParams, $ionicSlideBoxDelegate) {}])

.controller('classificaOCtrl', ['$scope', '$stateParams', '$ionicHistory', function ($scope, $stateParams, $ionicHistory) {
  $scope.init = function () {
    $ionicHistory.clearCache();
  };
}])
