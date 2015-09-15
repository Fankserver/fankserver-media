/// <reference path="typings/angular2/angular2.d.ts"/>
/// <reference path="typings/angular2/http.d.ts"/>
/// <reference path="typings/angular2/router.d.ts"/>
import {bind, bootstrap, Component, View} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, RouteConfig, RouterLink, RouterOutlet, Router} from "angular2/router";
import {VideoController} from "./video/videoController";

import {DirectoryService} from "./services/directoryService";

@Component({
	selector: "app"
})
@View({
	templateUrl: "/app/app.html",
	directives: [
		RouterOutlet,
		RouterLink
	]
})
@RouteConfig([
	{ path: "/",		redirectTo: "/video" },
	{ path: "/video",	component: VideoController }
])
class App {
	constructor(public router: Router) {

	}
}

bootstrap(
	App,
	[
		HTTP_BINDINGS,
		ROUTER_BINDINGS,
		bind(LocationStrategy).toClass(HashLocationStrategy),
		DirectoryService
	]
);
