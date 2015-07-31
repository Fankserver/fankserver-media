import { Component, View, NgFor } from 'angular2/angular2';
import { Router } from 'angular2/router';

import { VideoService } from '../services/videoService';

@Component({
	selector: 'fs-video',
	viewInjector: [
		VideoService
	]
})
@View({
	templateUrl: '/views/video.html',
	directives: [NgFor]
})
export class VideoController {
	videoStore: VideoService;

	constructor(public router: Router, videoStore: VideoService) {
		this.videoStore = videoStore;
		this.getVideos();
	}

	getVideos() {
		console.log('getVideos');
		this.videoStore.add('test');
	}
}
