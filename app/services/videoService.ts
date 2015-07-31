export class VideoService {
	videoList: Array<any>;

	constructor() {
		this.videoList = [];
	}

	add(item) {
		this.videoList.unshift({ text:item, done:false });
	}
}
