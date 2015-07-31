import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet, Router } from 'angular2/router';

import { VideoController } from './controllers/videoController';

@Component({
	selector: 'app'
})
@View({
	templateUrl: '/views/app.html',
	directives: [
		RouterOutlet,
		RouterLink
	]
})
@RouteConfig([
	{ path: '/',		redirectTo: '/video' },
	{ path: '/video',	as: 'fs-video',	component: VideoController }
])
export class App {
	constructor(public router: Router) {

	}
}
