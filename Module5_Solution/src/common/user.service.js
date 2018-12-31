(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath'];
function UserService ($http, ApiPath) {
  var service = this;
  service.user = {};

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items.json")
    });
    return response;
  };

  service.saveUser = function (user) {
    // console.log("User passed to UserService: ", user);
    service.user = user;
    // console.log("Just saved as service.user: ", service.user);
  }

  service.getUserInfo = function () {
    // console.log("getUserInfo returns as service.user: ", service.user);
    return service.user;
  }

  service.getItemImg = function () {
    return "Image goes here";
  }

}
})();
