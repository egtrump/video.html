var video;
var volumemessage

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volumemessage =document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volumemessage.innerHTML="100%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower");
	console.log(video.playbackRate);
	video.playbackRate *= 0.9;
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster");
	console.log(video.playbackRate);
	video.playbackRate *= 1.1;
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip");
	video.currentTime += 5;
})

document.querySelector("#mute").addEventListener("click", function() {
	 console.log("mute");

	 if (video.muted){
		 video.muted = false;
		 this.innerHTML="Mute";
		 console.log(video.muted);
	 }
	 else{
		 video.muted = true;
		 this.innerHTML="Unmute";
		 console.log(video.muted);
	 }
})

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("volumeSlider");
	console.log(this.value);
	volumemessage.innerHTML= this.value + "%";
	video.volume = this.value / 100; 
	// still need to update video.volume
})

document.querySelector("#old").addEventListener("click", function() {
	console.log("old");
	video.classList.add("oldTime");
})

document.querySelector("#original").addEventListener("click", function() {
	console.log("original");
	video.classList.remove("oldTime");
})
