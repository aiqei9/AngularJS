(function () {
'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  // ItemsController.$inject = ['myItems'];
  // function ItemsController(myItems) {
  //   var itemCtrl = this;
  //   itemCtrl.items = myItems;
  //   itemCtrl.selectedCat = itemCtrl.items.category.name
  //   console.log(itemCtrl.items);
  // }

  ItemsController.$inject = ['items', '$stateParams'];
  function ItemsController(items, $stateParams) {
    var itemCtrl = this;
    itemCtrl.catID = $stateParams.catID;
    itemCtrl.catName = $stateParams.catName;
    itemCtrl.items = items;
    console.log("Retrieved items", itemCtrl.items);
  };

})();
