var VideoService = (function () {
    function VideoService() {
        this.videoList = [];
    }
    VideoService.prototype.add = function (item) {
        this.videoList.unshift({ text: item, done: false });
    };
    return VideoService;
})();
exports.VideoService = VideoService;
