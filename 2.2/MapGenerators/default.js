Mapgens.push("default");
function defaultMapGenerator(){
map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
mapString=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
mapMeta=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
mapStringVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
farmTimer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

var middleGenerator=[air,air,dirt];
var groundGenerator=[lava,stone];
var ground2Generator=[dirt,stone];
for(x=0;x<25;x++){
	for(y=0;y<25;y++){
	if(y<7){
		node=air;
		
		}
		
		
		
	else if(y<16){
		
	if(mapString[x][y-1]==="dirt"||mapString[x][y-1]==="dirt_grass"){
	node=dirt;

	}
	else if(map[x-1]){
		var dp=mapString[x-1].indexOf("dirt_grass");
		if(dp==-1){dp=mapString[x-1].indexOf("stone")}
	if(dp>y+1){
			node=air;
	}
	
	else if(mapString[x-1][y-1]=="dirt"||mapString[x-1][y-1]=="dirt_grass"){
			node=dirt;
			}
			
	else{		
	var f=Math.floor(Math.random()*3);	
		node=middleGenerator[f]; 	
	}
}
	else{
		var f=Math.floor(Math.random()*3);	
		node=middleGenerator[f];
		
		}
	
	}
		
		
		
		
			
	else if (y<18){
		if(mapString[x][y-1]==="stone"){
		node=stone;
		}
	else{		
	var f=Math.floor(Math.random()*2);	
		node=ground2Generator[f];
	}
	
		}
	else if (y>23){
	
	var e=Math.floor(Math.random()*2);	
	node=groundGenerator[e];	
		}
	
					
	else{
		node=stone;
		}
			
	map[x][y]=node;
	
	Act(x,y);
		}}
	
	return "allowed"
 }
