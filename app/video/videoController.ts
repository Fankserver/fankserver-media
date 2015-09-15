import {Component, View, NgFor} from "angular2/angular2";
import {Router} from "angular2/router";

import {DirectoryService} from "../services/directoryService";

@Component({
	selector: "fs-video",
	viewInjector: [
		DirectoryService
	]
})
@View({
	templateUrl: "/app/video/video.html",
	directives: [NgFor]
})
export class VideoController {
	folderContent = [];
	directoryService: DirectoryService;

	constructor(public router: Router, directoryService: DirectoryService) {
		this.directoryService = directoryService;
	}

	onInit() {
		this.getVideos();
	}

	getVideos() {
		console.log("getVideos");
		this.directoryService.getFolder("http://1.mediacontainer.fankservercdn.com/Videos/")
			.subscribe(res => this.folderContent = res);
	}
}
