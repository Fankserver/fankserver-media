(function() {
	'use strict';

	angular
		.module('MediaApp', ['ngRoute', 'ngCookies'])
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];
	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.view.html'
			})

			.when('/Music', {
				controller: 'MusicController',
				templateUrl: 'pages/music.view.html',
				controllerAs: 'vm'
			})

			.when('/Video', {
				controller: 'VideoController',
				templateUrl: 'pages/video.view.html',
				controllerAs: 'vm'
			})

			.otherwise({ redirectTo: '/' });
	}
})();
