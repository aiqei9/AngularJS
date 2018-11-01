(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.lunchItems = "";
  $scope.message = "";
  $scope.mssgType = ""; // for styling purposes

  $scope.checkLunch = function () {
    var result = "";
    if ($scope.lunchItems == "") {  // No input to process
      result = "Please enter data first";
      $scope.mssgType = "enterData";
    }
    else { // There is input to process
      var itemsArray = $scope.lunchItems.split(' ').sort();
      // console.log(itemsArray);
      var emptyItemsCounter = 0;
      itemsArray.forEach(function (e, i, arr) { // loop over array to count empty items
        if (e.charAt(0) == ",") {
          emptyItemsCounter += 1;
          // console.log(emptyItemsCounter);
        };
      });
      if (emptyItemsCounter > 0) { // Remove empty items if any
        itemsArray.splice(0, emptyItemsCounter);
      };
      // console.log(itemsArray);
      var numItems = itemsArray.length;
      // console.log(numItems);
      result = chooseMessage(numItems);
    }
    $scope.message = result;
  };

  function chooseMessage (num) {
    var mssg = "";
    if (num < 4) {
      mssg = "Enjoy!";
      $scope.mssgType = "Enjoy";
    }
    else {
      mssg = "Too much!";
      $scope.mssgType = "TooMuch";
    };
    return mssg;
  }

}

})();
