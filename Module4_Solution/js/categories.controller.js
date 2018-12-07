(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// CategoriesController.$inject = ['MenuDataService'];
// function CategoriesController(MenuDataService) {
CategoriesController.$inject = ['cats'];
function CategoriesController(cats) {
  var catCtrl = this;
  catCtrl.categories = cats;
  // console.log("Retrieved categories", catCtrl.categories);

  // catCtrl.$onInit = function () {
  //   MenuDataService.getAllCategories()
  //   .then(function (result) {
  //     catCtrl.categories = result;
  //   });
  // };

}

})();
