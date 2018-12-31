(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService) {

  var SignUpCtrl = this;
  SignUpCtrl.message = "";
  SignUpCtrl.registeredUser = UserService.getUserInfo(); // Initialize User with last successful Submit process

  if (SignUpCtrl.registeredUser.FavItemID !== undefined) {
    SignUpCtrl.user = angular.copy(SignUpCtrl.registeredUser); // Passing by value to avoid coupling by reference
  }
  else {
    SignUpCtrl.user = {
      FirstName: 'John',
      LastName: 'Doe',
      email: 'john@doe',
      PhoneNumber: '222-222-2222',
      FavItemID: 'A1',
      FavItemName: '',
      FavItemDescription: ''
    };
  }


  // After initialization values for the 'user' object, its identity gets fixed at each valid click on the Submit button
  SignUpCtrl.submitRequest = function () {
    SignUpCtrl.itemOK = false;
    // console.log("Registered user upon Submit request is: ", SignUpCtrl.registeredUser);
    var promise = UserService.getMenuItems();
    promise.then(function (response) {
      var menu_data = response.data.menu_items;
      SignUpCtrl.user.FavItemID = SignUpCtrl.user.FavItemID.toUpperCase();
      // console.log("No. of menu items retrieved: ", menu_data.length);
      // var items_checked = 0;
      for (var i=0; i<menu_data.length; i++) {
        // items_checked++;
        if (menu_data[i].short_name === SignUpCtrl.user.FavItemID) {
          SignUpCtrl.itemOK = true;
          SignUpCtrl.user.FavItemName = menu_data[i].name;
          SignUpCtrl.user.FavItemDescription = menu_data[i].description;
          // console.log("FavItem verified: ", user.FavItem);
          // console.log("FavItem #: ", items_checked);
          break;
        }
      }

      // console.log("# Items checked: ", items_checked);
      // console.log("itemOK = ", SignUpCtrl.itemOK);

      if (SignUpCtrl.itemOK) {
        var newUser = angular.copy(SignUpCtrl.user);
        // Pass a copy of the object so that the version recorded by the service
        // is a different instance to the one bound to the view
        UserService.saveUser(newUser);
        SignUpCtrl.registeredUser = UserService.getUserInfo();
        SignUpCtrl.message = "Your information has been saved";
      }
      else {
        SignUpCtrl.message = "  '" + SignUpCtrl.user.FavItemID + "': No such menu number exists";
        SignUpCtrl.user.FavItemID = "";
        // console.log("Registered user after Submit fail still is: ", SignUpCtrl.registeredUser);
      }

    })
    .catch(function (error) {
      console.log("Error while retrieving the data: ", error);
    });

  };

}

})();
