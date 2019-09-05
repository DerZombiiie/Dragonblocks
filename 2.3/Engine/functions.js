function spawn(){	
	xpos=12;
	ypos=0;
	player.style.top=ypos*30+"px";
	player.style.left=xpos*30+"px";
	clearTimeout(fto);
	fall(gravity);
	}
function updateAll(){
	for(x=0;x<25;x++){
	for(y=0;y<25;y++){
		Act(x,y)
		}
	}
	}
function openWindow(){
	closeWindow();
	denyKeyEvents();
	document.getElementById('Options').style.visibility = "hidden";
	document.getElementById('layer').style.visibility = "visible";
	newWindow.style.visibility = "visible";
	return newWindowContent
	}
function closeWindow(){
	allowKeyEvents();
	newWindowContent.innerHTML = "";
	newWindow.style.visibility = "hidden";
	document.getElementById('layer').style.visibility = "hidden";
	}
function skin(playerSkin){
	closeWindow();
	if(skins[playerSkin]){
		player.style.background=skins[playerSkin];
		player.style.backgroundSize="cover";
		}
		
	 }
function setBlock(x,y,block){
	if(x<25&&y<25){
		if(!map[x][y].buildStability){
			map[x][y] = block;
			Act(x,y);
			}	
		}
	}	

	function toggleLayer(){
		if(document.getElementById('layer').style.visibility === "hidden"){
			document.getElementById('layer').style.visibility = "visible";
			}
		else{
			document.getElementById('layer').style.visibility = "hidden";
			}	
	}	
function denyKeyEvents(){
	IEvent = false;
	SpaceEvent = false;
	EscapeEvent = false;
	RightArrowEvent = false;
	LeftArrowEvent = false;
	NEvent = false;
	BEvent = false;
	ShiftEvent = false;
	MouseWheelEvent = false;
	}			
function allowKeyEvents(){
	IEvent = true;
	SpaceEvent = true;
	EscapeEvent = true;
	RightArrowEvent = true;
	LeftArrowEvent = true;
	NEvent = true;
	BEvent = true;
	ShiftEvent = true;
	MouseWheelEvent = true;
	}
