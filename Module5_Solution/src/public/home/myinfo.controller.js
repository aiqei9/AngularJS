(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['currentUser', 'itemImg'];
function MyInfoController(currentUser, itemImg) {
  var MyInfoCtrl = this;
  MyInfoCtrl.user = currentUser;
  // console.log("User obtained by MyInfoController: ", MyInfoCtrl.user);
  // console.log("...with FavItemID: ", MyInfoCtrl.user.FavItemID);

  MyInfoCtrl.itemImg = itemImg;

}

})();
