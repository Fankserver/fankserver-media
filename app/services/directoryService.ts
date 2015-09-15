/// <reference path="typings/angular2/http.d.ts"/>
import {Inject, View, NgFor} from "angular2/angular2";
import {Http} from "angular2/http";

export class DirectoryService {
	_http: Http;

	constructor(@Inject(Http) http: Http) {
		this._http = http;
	}

	getFolder(folder: string) {
		return this._http.get(folder)
			.toRx()
			.map(res => res.json());
	}
}
