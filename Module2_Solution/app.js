(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.itemBuy = function (itemIndex) {
      ShoppingListCheckOffService.itemBuy(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

function ShoppingListCheckOffService() {
  var service = this;
  var itemsToBuy = [
    {name: "Cookies", quantity: 10},
    {name: "Pasta", quantity: 2},
    {name: "Soda", quantity: 5},
    {name: "Tomatoes", quantity: 4},
    {name: "Lettuce", quantity: 3},
    ];
  var itemsBought = [];

  service.itemBuy = function (itemIndex) {
    var itemName = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(itemName);
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}


})();
