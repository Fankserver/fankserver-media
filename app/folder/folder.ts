import {Component, View, NgFor, NgIf} from "angular2/angular2";
import {Http} from "angular2/http";
import {Router} from "angular2/router";

import {FolderService} from "../services/folderService";

@Component({
	selector: "folder"
})
@View({
	templateUrl: "/app/folder/folder.html",
	directives: [NgFor, NgIf]
})
export class FolderController {
	_folderService: FolderService;
	_currentFolder: Array<string>;
	_currentHostname: string;
	_folderContent: Array<any>;
	_activeIndex: number;

	constructor(router: Router, folderService: FolderService) {
		this._folderService = folderService;

		this._currentFolder = [];
		this._currentHostname = "1.mediacontainer.fankservercdn.com";
		this._folderContent = [];
		this._activeIndex = -1;
	}

	onInit() {
		this.getFolder("Videos");
	}

	getFolder(folder: string) {
		this._activeIndex = -1;
		this._folderService.getFolder(this.getFolderFormat(folder))
			.subscribe(res => this._folderContent = res);
	}

	getFolderFormat(folder: string): string {
		if (folder != "") {
			this._currentFolder.push(folder);
		}

		return "http://" + this._currentHostname + "/" + this._currentFolder.join("/") + "/";
	}

	getExtension(filename: string) {
		return filename.split(".").pop();
	}

	setIndex(index: number) {
		if (
			index >= 0
			&& index < this._folderContent.length
		) {
			if (this._folderContent[index].type == "file") {
				this._activeIndex = index;
			}
			else {
				this.getFolder(this._folderContent[index].name);
			}
		}
	}

	setFolderIndex(index: number) {
		this._currentFolder.splice(index + 1, this._currentFolder.length - index);
		this.getFolder("");
	}
}
