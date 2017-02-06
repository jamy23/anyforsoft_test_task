angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('books', {
    url: '/',
    templateUrl: 'templates/books.html',
    controller: 'booksCtrl',
    resolve: {
      books: function (Books) {
        return Books.getList();
      }
    }
  })

  .state('book', {
    url: '/book/:bookId',
    templateUrl: 'templates/book.html',
    controller: 'bookCtrl',
    resolve: {
      book: function ($stateParams, Books) {
        return Books.getItem($stateParams.bookId);
      }
    }
  })

$urlRouterProvider.otherwise('/')

  

});
