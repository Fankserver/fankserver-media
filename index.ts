/// <reference path="typings/angular2/angular2.d.ts"/>
/// <reference path="typings/angular2/router.d.ts"/>
import { bootstrap } from "angular2/angular2";
import { ROUTER_BINDINGS } from "angular2/router";

import { App } from './app/app';

bootstrap(
	App,
	[
		ROUTER_BINDINGS
	]
);
