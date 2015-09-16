import {Component, View, NgFor, NgIf} from "angular2/angular2";
import {Router} from "angular2/router";

import {FsVideo} from "./video";
import {FolderService} from "../services/folderService";

@Component({
	selector: "folder"
})
@View({
	templateUrl: "/app/folder/folder.html",
	directives: [FsVideo, NgFor, NgIf]
})
export class FolderController {
	_folderService: FolderService;
	_folderStack: Array<string>;
	_currentHostname: string;
	_folderContent: Array<any>;
	_activeIndex: number;

	constructor(router: Router, folderService: FolderService) {
		this._folderService = folderService;

		this._folderStack = [];
		this._currentHostname = "1.mediacontainer.fankservercdn.com";
		this._folderContent = [];
		this._activeIndex = -1;
	}

	onInit() {
		this.getFolder("");
	}

	getFolder(folder: string) {
		this._activeIndex = -1;
		this._folderService.getFolder(this.getFolderFormat(folder))
			.subscribe(res => this._folderContent = res);
	}

	getFolderFormat(folder: string): string {
		if (folder != "") {
			this._folderStack.push(folder);
		}

		return "http://" + this._currentHostname + "/" + this._folderStack.join("/");
	}

	getExtension(filename: string) {
		return filename ? filename.split(".").pop() : "";
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
		this._folderStack.splice(index + 1, this._folderStack.length - index);
		this.getFolder("");
	}

	isVideo(extension: string) {
		return extension ? extension.match(/mp4|avi/) : null;
	}
	isImage(extension: string) {
		return extension ? extension.match(/jpg|png|gif/) : null;
	}
}
