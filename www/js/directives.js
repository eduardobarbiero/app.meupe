angular.module('app.directives', [])

.directive('checkClick', [function (){
  return {
      restrict:'A',
      link: function (scope, elem, attr) {
        console.log(attr);
        elem.bind('click', function () {
          console.log(attr);
        });
      }
   };
 }])
.directive('blankDirective', [function(){

}]);
