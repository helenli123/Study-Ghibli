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

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + 
    ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^s+|s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

var song = document.getElementsByTagName('audio')[0];
var restart = false;
var played = false;
var directory = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
  if(document.getElementById("page1") ==null)
    {
    restart = true
    }
  
  if(!played && !directory && restart){
     if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        played = true;
       directory = true;
        }

    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update,1000); 