function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      }
	  }
	}

function playSound()
{
          var sound = document.getElementById("audio");
          sound.src = "https://cdn.glitch.global/89be2ea4-79b8-4a1d-a240-17699999f723/click.mp3?v=1641711837468";
          sound.play();
 
    }