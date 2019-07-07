(function () {
'use strict';
angular.module('Module1', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope){

  $scope.foodLine = "";
  $scope.foodState = "";

  $scope.generateState = function (){

    console.log($scope.foodLine);
    var foodlineResult = checkFoodLine($scope.foodLine);
    $scope.foodState = foodlineResult;
  };

};

function checkFoodLine(line){

  var words = line.split(',');
  if (line == ''){
    return 'Please enter data first';
  }
  else if (words.length <= 3) {
    return 'Enjoy!'
  }
  else {
    return 'Too much!';
  }
};

})();
