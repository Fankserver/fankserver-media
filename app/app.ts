import {bind, bootstrap, Component, View} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, RouteConfig, RouterLink, RouterOutlet, Router} from "angular2/router";

import {FolderService} from "./services/folderService";

import {FolderController} from "./folder/folder";

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
	{path: "/",	component: FolderController}
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
		FolderService
	]
);
