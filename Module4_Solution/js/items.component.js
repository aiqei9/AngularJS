(function () {
'use strict';

angular.module('Data')
.component('menuItems', {
  templateUrl: 'js/templates/ListOfmenuItems.html',
  bindings: {
    items: '<',
  }
});

})();
