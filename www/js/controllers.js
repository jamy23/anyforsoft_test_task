angular.module('app.controllers', [])
  
.controller('booksCtrl', ['$scope', 'books', function ($scope, books) {
  $scope.items = books;
}])
   
.controller('bookCtrl', ['$scope', 'book', function ($scope, book) {
  angular.extend($scope, book);
}])
 
