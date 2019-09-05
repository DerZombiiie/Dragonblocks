var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapMeta=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
Generate();
generateMap("default");
function Generate(){
	for(x=0;x<25;x++){
	source=document.getElementsByName('spalte'+x)[0];
	source.style.position="absolute";
	source.style.top="0px";
	source.style.left=x*30+"px";
	source.style.width="30px";
	source.style.height="750px";
	source.style.borderWidth="1px";
	for(y=0;y<25;y++){
	source=document.getElementsByName('zeile'+y)[x];
	source.style.position="absolute";
	source.style.top=y*30+"px";
	source.style.left="0px";
	source.style.width="30px";
	source.style.height="30px";
	source.style.borderWidth="2px";
	source.style.borderColor="blue";
	//source.style.borderStyle="solid";
	}
	}
}
function generateMap(kind){
	var func=kind+"MapGenerator();";
	if(eval(func)==="allowed"){
		}
		
	else{window.alert("Unknown Map Generator")}	
		
	xpos=12.5;
	ypos=0;
		return "allowed"	
	}

function Act(x,y){
	source=document.getElementsByName('zeile'+y)[x];
	if((map[x][y]==="dirt"||map[x][y]==="dirt_grass")&&mapMeta[x].lastIndexOf("solid",y-1)===-1&&mapMeta[x].lastIndexOf("liquid",y-1)===-1){
		map[x][y]="dirt_grass";
		}
	else if(map[x][y]==="dirt"||map[x][y]==="dirt_grass"){
	map[x][y]="dirt";
		}	
	source.style.background=nodeTextures[map[x][y]];
	source.style.backgroundSize="cover";
	mapMeta[x][y]=nodeConfig[map[x][y]];
	mapVertical[y][x]=map[x][y];
	mapMetaVertical[y][x]=nodeConfig[mapVertical[y][x]];
				}
function setMap(mapName){
			if(eval(mapName+"();")==="allowed"){
				}
			else{window.alert("Unknown Map")}	
			return "allowed"	
			}
function changeMap(selectx,selecty,selectnode){
				if(map[selectx][selecty]&&nodeConfig[selectnode]){
				map[selectx][selecty]=selectnode;
				Act(selectx,selecty);	
					}
				else{window.alert("Unknown Node or Position")}	
				return "allowed"
				}		
	
		
	

