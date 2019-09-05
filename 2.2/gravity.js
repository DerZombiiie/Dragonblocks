	var player=document.getElementById('player');	
	
	
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
	
	
	function spawn(){	
	xpos=12;
	ypos=0;
	player.style.top=ypos*30+"px";
	player.style.left=xpos*30+"px";
	clearTimeout(fto);
	fall(gravity);
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
		}
	else{
		window.alert("invalid coordinates!")
		}
		return "allowed"		
		}		
function save(){
document.cookie="map="+mapString.toSource().replace(/"/g,' ').replace(/\ /g,'');



}
function updateAll(){
	for(x=0;x<25;x++){
	for(y=0;y<25;y++){
		Act(x,y)
		}
	}
	}
function mapPlus(){
	
	var mapscript="";
	for(i=Mapgens.length;i--;i>=0){
		mapscript=mapscript+Mapgens[i]+"/";
		}
	mapscript=mapscript.slice(0,mapscript.length-1);
	
	var maplscript="";
	for(i=ExtraMaps.length;i--;i>=0){
		maplscript=maplscript+ExtraMaps[i]+"/";
		}
	maplscript=maplscript.slice(0,maplscript.length-1);
	
	icans1=true;
	while(icans1){
	var mappingq=window.prompt("Do you want to generate or load a Map?", "load/gen");
	if(mappingq==="gen"){
	icans=true;
	while(icans){
		var mapgenq=window.prompt("Which Mapgen do you want to use?", mapscript);
		if (Mapgens.indexOf(mapgenq)!=-1){
			icans=false;
			icans1=false
			generateMap(mapgenq)
			}
		}
	}
	if(mappingq==="load"){
	icans2=true
		while(icans2){
		var maploadq=window.prompt("Which Map do you want to load?", maplscript);
		if(ExtraMaps.indexOf(maploadq)!=-1){
			icans1=false;
			icans2=false;
			setMap(maploadq);
		}
			}
		}
		}
	}
