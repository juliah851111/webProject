var myApp = angular.module('myApp', ['ngRoute']);
// prevent slash to '%2F'
myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
myApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);


myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'BooksController',
		templateUrl: 'view/books.html'
	})
	.when('/books', {
		controller: 'BooksController',
		templateUrl: 'view/books.html'
	})
	.when('/books/details/:id', {
		controller: 'BooksController',
		templateUrl: 'view/book_details.html'
	})
	.when('/books/add', {
		controller: 'BooksController',
		templateUrl: 'view/add_book.html'
	})
	.when('/books/edit/:id', {
		controller: 'BooksController',
		templateUrl: 'view/edit_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});