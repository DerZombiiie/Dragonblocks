var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var farmTimer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapString=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapMeta=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapStringVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
Generate();

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
	source.style.borderWidth="1px";
	source.style.borderColor="black";
	//source.style.borderStyle="solid";
	}
	}
}
function generateMap(kind){
	var func=kind+"MapGenerator();";
	if(Mapgens.indexOf(kind)!=-1){
		eval(func)
		}
		
	else{window.alert("Unknown Map Generator")}	
		
	xpos=12.5;
	ypos=0;
		return "allowed"	
	}

function Act(x,y){
	source=document.getElementsByName('zeile'+y)[x];
	if(map[x][y].groups.indexOf("dirt")!=-1&&mapMeta[x].lastIndexOf(true, y-1)===-1){
		map[x][y]=dirt_grass;
		}
	else if(map[x][y].groups.indexOf("dirt")!=-1){
	map[x][y]=dirt;
		}	
	source.style.background=map[x][y].texture;
	source.style.backgroundSize="cover";
	mapMeta[x][y]=map[x][y].mobStability;
	mapString[x][y]=map[x][y].name;
	mapVertical[y][x]=map[x][y];
	mapStringVertical[y][x]=map[x][y].name;
	mapMetaVertical[y][x]=mapVertical[y][x].mobStability;
	if(map[x][y].farm){
	farmTimer[x][y]=setTimeout(grow , map[x][y].growtime, x, y);
		}
				}
function setMap(mapName){
			if(eval(mapName+"();")==="allowed"){
				}
			else{window.alert("Unknown Map")}	
			return "allowed"	
			}
function changeMap(selectx,selecty,selectnode){
				if(map[selectx][selecty]&&selectnode){
				map[selectx][selecty]=selectnode;
				Act(selectx,selecty);	
					}
				else{window.alert("Unknown Node or Position")}	
				return "allowed"
				}		
	
		
	

