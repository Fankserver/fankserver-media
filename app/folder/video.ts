import {Directive, ElementRef, OnChanges} from "angular2/angular2";

@Directive({
	selector: "video[fs-video]",
	properties: ["_source: fsVideo"]
})
export class FsVideo implements OnChanges {
	_element: ElementRef;
	_source: string;

	constructor(element: ElementRef) {
		this._element = element;
	}

	onChanges(c: StringMap<string, any>) {
		if (c["_source"]) {
			var mediaElement = this._element.nativeElement;
			mediaElement.src = this._source;
			mediaElement.load();
		}
	}
}
