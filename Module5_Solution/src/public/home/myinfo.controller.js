(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['currentUser', 'ApiPath'];
function MyInfoController(currentUser, ApiPath) {
  var MyInfoCtrl = this;
  MyInfoCtrl.imgPath = ApiPath;
  MyInfoCtrl.user = currentUser;
  // console.log("User obtained by MyInfoController: ", MyInfoCtrl.user);
  // console.log("...with FavItemID: ", MyInfoCtrl.user.FavItemID);

  // if (MyInfoCtrl.user.FavItemID !== undefined) {
  //   var promise = UserService.getItemImg(MyInfoCtrl.user.FavItemID);
  //   promise.then(function (response) {
  //     MyInfoCtrl.itemImg = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log("Error while retrieving the menu item image: ", error);
  //   });
  // }

}

})();
