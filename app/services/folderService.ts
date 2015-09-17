import {Injectable} from "angular2/angular2";
import {Http} from "angular2/http";

@Injectable()
export class FolderService {
	_http: Http;

	constructor(http: Http) {
		this._http = http;
	}

	getFolder(folder: string) {
		return this._http.get(folder)
			.toRx()
			.map(res => res.json());
	}
}
