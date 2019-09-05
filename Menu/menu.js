	function play(){
		window.location.href=document.getElementById('version').value;
		}
	
window.addEventListener("DOMContentLoaded",splashStart);
function splash(){
	var mySplash = document.getElementById('splash');
	var theSize = mySplash.style.fontSize.replace(/px/,'');
	if(!theSize){
		theSize = "26";
		}
	if(theSize == 25||theSize == 30){
		dir = !dir;
		}
	if(dir){
		mySplash.style.fontSize = parseInt(theSize) + 1 + "px";
		}	
	else{
		mySplash.style.fontSize = parseInt(theSize) - 1 + "px";
		}		
	setTimeout(splash,1000/25);
	}
function splashStart(){
	document.getElementById('splash').innerHTML = splashTexts[Math.floor(Math.random()*splashTexts.length)];
	splash();
	}
var dir = true;
