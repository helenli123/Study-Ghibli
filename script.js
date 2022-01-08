function toggleFullScreen() {
	  var doc = window.document;
	  var docEl = doc.documentElement;

	  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		requestFullScreen.call(docEl);
	  }
	  else {
		cancelFullScreen.call(doc);
	  }
	}
function audioplay()
{
  var audio = new Audio("https://cdn.glitch.global/89be2ea4-79b8-4a1d-a240-17699999f723/Weathering%20with%20You%20%2B%20Your%20Name%20OST%20_%20Sky%20Clearing%20Up%20%2B%20Katawaredoki%20(piano%20cover).mp3?v=1641599044612");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

}