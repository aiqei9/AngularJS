(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'js/templates/ListOfCategories.html',
  bindings: {
    elements: '<categories',
  }
});

})();
