(function () {
	'use strict';

	angular
		.module('MediaApp')
		.controller('VideoController', VideoController);

	VideoController.$inject = ['$cookieStore', '$rootScope', '$scope', '$http'];
	function VideoController($cookieStore, $rootScope, $scope, $http) {
		var vm = this;

		$rootScope.globals = $cookieStore.get('globals');
		vm.lastVideoWatched = $rootScope.globals.lastVideoWatched;

		vm.getFolderContent = getFolderContent;
		vm.openIndex = openIndex;
		vm.playIndex = playIndex;
		vm.resumeSource = resumeSource;

		vm.folderStack = [];
		vm.folder = [];

		vm.videoIndex = -1;
		vm.videoName = '';

		(function initController() {
			vm.getFolderContent('');
		})();

		function getFolderContent(folder) {
			$http.get('/Videos/' + folder).success(function(data) {
				for (var item in data) {
					data[item].path = vm.folderStack.join('/') + '/'+ data[item].name;
				}
				vm.folder = data;
			});
		}

		function openIndex(index) {
			if (vm.folder[index]) {
				if (vm.folder[index].type == 'directory') {
					vm.folderStack.push(vm.folder[index].name);
					getFolderContent(vm.folderStack.join('/'));
				}
				else if (vm.folder[index].type == 'file') {
					playIndex(index);
				}
			}
		}

		function playIndex(index) {
			var videoSource = '/Videos/' + vm.folderStack.join('/') + '/' + vm.folder[index].name;

			if (vm.videoIndex >= 0) {
				var myVideo = document.getElementsByTagName('video')[0];
				myVideo.src = videoSource;
				myVideo.load();
			}
			else {
				vm.videoSrc = videoSource;
			}

			$rootScope.globals = {
				lastVideoWatched: videoSource
			};

			$cookieStore.put('globals', $rootScope.globals);

			vm.videoIndex = index;
			vm.videoName = vm.folder[index].name;
		}

		function resumeSource(source) {
			vm.videoIndex = 0;
			var myVideo = document.getElementsByTagName('video')[0];
			myVideo.src = source;
			myVideo.load();
		}
	}
})();
