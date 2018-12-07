(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService ($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      // return a promise which is a result of using the $http service
      // on the REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (response) {
        // console.log(response.data);
        return response.data
      })
    };

    service.getItemsForCategory = function (categoryShortName) {
      // return a promise which is a result of using the $http service
      // on the REST API endpoint:  https://davids-restaurant.herokuapp.com/menu_items.json?category=
      // where before the call to the server, your code should append whatever
      // categoryShortName value was passed in as an argument into the getItemsForCategory method.
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      }).then(function (response) {
        // console.log(response.data.menu_items);
        return response.data.menu_items;
      })
    };

  }

})();
