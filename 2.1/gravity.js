	var player=document.getElementById('player');	
	
	var playerSkin="black";
	player.style.background=skins[playerSkin];
	player.style.backgroundSize="cover";


	function skin(playerSkin){
		if(!playerSkin||!skins[playerSkin]){
			window.alert("Unknown Skin");
			}
		player.style.background=skins[playerSkin];
		player.style.backgroundSize="cover";
		window.alert("Skin set to "+playerSkin);
		return "allowed"
		}
	
	spawn();
	function spawn(){	
	xpos=12;
	ypos=0;
	player.style.top=ypos*30+"px";
	player.style.left=xpos*30+"px";
	fall(false);
	return "allowed"
}
	
		var allowedCommands=["skin","spawn","setMap","changeMap","generateMap","teleport"];
		var mode="user";
		function command(evt){
			if(evt.key==="Enter"){
				
				var cmd=document.getElementById('commands').value;
				if (mode==="root"){
					eval(cmd);
					}
				else if (cmd==="su"){
					if(window.prompt("Password:")===password){
						mode="root";
						}
					else{window.alert("incorrect");}	
					}
				else if(allowedCommands.indexOf( cmd.slice( 0, cmd.indexOf("(") ) )!=-1 && cmd.indexOf(";")===-1  && eval(cmd+";")==="allowed"){
					}
				else{
				window.alert("Unknown Command");	
					}	
				
				}
			}
	function teleport(x,y){
	if(x<25&&x>=0&&y<25&&y>=0){
		xpos=x;
		ypos=y;
		fall();
		}
	else{
		window.alert("invalid coordinates!")
		}
		return "allowed"		
		}		
