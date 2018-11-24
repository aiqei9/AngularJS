(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItems);

  function foundItems() {
    var ddo = {
      templateUrl: 'foundItems.html'
      // scope: {
      //   found_Items: '<',
      //   onRemove: '&'
      // }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var NarrowCtrl = this;

    NarrowCtrl.searchTerm = "";
    NarrowCtrl.found_items = [];
    NarrowCtrl.mssg = "";

    NarrowCtrl.getMatchedMenuItems = function () {
      if (NarrowCtrl.searchTerm == "") {
        NarrowCtrl.mssg = "Please enter a search term";
      } else {
        var promise = MenuSearchService.getMatchedMenuItems(NarrowCtrl.searchTerm);
        promise.then(function (response) {
          NarrowCtrl.found_items = response;
          if (NarrowCtrl.found_items.length == 0) {
            NarrowCtrl.mssg = "Nothing found";
          }
        }).catch(function (error) {
          console.log("Something went wrong: " + error);
        })
      }
    };

    NarrowCtrl.removeItem = function (itemIdx) {
      var itemToRemove = NarrowCtrl.found_items[itemIdx];
      NarrowCtrl.found_items.splice(itemToRemove, 1);
    };


  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      searchTerm = searchTerm.trim().toLowerCase();

      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          name: "name",
          shortname: "short_name",
          description: "description"
        }
      }).then(function (response) {
        var menu_data = response.data.menu_items;
        var found_items = [];
        for (var i=0; i<menu_data.length; i++) {
          if (menu_data[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            found_items.push(menu_data[i]);
          }
        }
        // console.log(found_items);
        return found_items;
      })
      .catch(function (error) {
        console.log("Error while retrieving the data.");
      });

    };

  }

})();
