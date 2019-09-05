function clearMap(){
	map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mapString=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mapMeta=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mapStringVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	farmTimer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	}	
function randomMapGenerator(){
	eval(Mapgens[Math.floor(Math.random()*Mapgens.length)]+"MapGenerator();");
	}
function DefaultMapGenerator(){
	clearMap();
	basicMapgen();
	lakeMapgen();
	caveMapgen();
	}	
Mapgens.unshift("Default");
Mapgens.push("Crazy");
function CrazyMapGenerator(){
clearMap();
for(x=0;x<25;x++){
for(y=0;y<25;y++){
map[x][y] = blocks[Math.floor(Math.random()*blocks.length)];
if((x===12||x===13)&&y===0) {
	map[x][y] = air;
	}
Act(x,y);
}
}
}
Mapgens.push("Flat");
function FlatMapGenerator(){
	clearMap();
for(x=0;x<25;x++){
	for(y=0;y<25;y++){
	if(y<12){
		node=air;
		}
		
		
		
	else if(y<17){
		node=mapgen_dirt;
	}
	else{
		node=mapgen_stone;
	}
	map[x][y]=node;
	
	Act(x,y);
		}}
	
 }
	
function basicMapgen(){

var middleGenerator=[air,air,mapgen_dirt];
var groundGenerator=[mapgen_lava,mapgen_stone];
var ground2Generator=[mapgen_dirt,mapgen_stone];
for(x=0;x<25;x++){
	for(y=0;y<25;y++){
	if(y<7){
		node=air;
		
		}
		
		
		
	else if(y<16){
		
	if(map[x][y-1]===mapgen_dirt||map[x][y-1]===mapgen_dirt_grass){
	node=mapgen_dirt;

	}
	else if(map[x-1]){
		var dp=map[x-1].indexOf(mapgen_dirt_grass);
		if(dp==-1){dp=map[x-1].indexOf(mapgen_stone)}
	if(dp>y+1){
			node=air;
	}
	
	else if(map[x-1][y-1]==mapgen_dirt||map[x-1][y-1]==mapgen_dirt_grass){
			node=mapgen_dirt;
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
		if(map[x][y-1]===mapgen_stone){
		node=mapgen_stone;
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
		node=mapgen_stone;
		}
			
	map[x][y]=node;
	
	Act(x,y);
		}}
	
 }
function caveMapgen(){
	var x=Math.floor(Math.random()*25);
    var y=Math.floor(Math.random()*7)+18;
    map[x][y]=air;
    if(Math.floor(Math.random()*4)<=2&&map[x+1]&&map[x+1][y]){
map[x+1][y]=air;
	}
if(Math.floor(Math.random()*4)<=2&&map[x-1]&&map[x-1][y]){
map[x-1][y]=air;
	}
if(Math.floor(Math.random()*4)<=2&&map[x]&&map[x][y+1]){
map[x][y+1]=air;
	}
if(Math.floor(Math.random()*4)<=2&&map[x]&&map[x][y-1]){
map[x][y-1]=air;
	}
if(Math.floor(Math.random()*4)<=1&&map[x+1]&&map[x+1][y+1]){
map[x+1][y+1]=air;
	}
if(Math.floor(Math.random()*4)<=1&&map[x-1]&&map[x-1][y+1]){
map[x-1][y+1]=air;
	}
if(Math.floor(Math.random()*4)<=1&&map[x+1]&&map[x+1][y-1]){
map[x+1][y-1]=air;
	}
if(Math.floor(Math.random()*4)<=1&&map[x-1]&&map[x-1][y-1]){
map[x-1][y-1]=air;
	}
if(Math.floor(Math.random()*4)<=1&&map[x]&&map[x][y-2]){
map[x][y-2]=air;
	}
	if(Math.floor(Math.random()*4)<=1&&map[x]&&map[x][y+2]){
map[x][y+2]=air;
	}
	if(Math.floor(Math.random()*4)<=1&&map[x+2]&&map[x+2][y]){
map[x+2][y]=air;
	}
	if(Math.floor(Math.random()*4)<=1&&map[x-2]&&map[x-2][y]){
map[x-2][y]=air;
	}
	updateAll();
	}
function lakeMapgen(){
	var small=0;
	for(i=0;i<25;i++){
		var mio1=map[i].indexOf(mapgen_dirt_grass);
	if(mio1===-1){
		mio1=map[i].indexOf(mapgen_stone);
		}
	var mio2=map[small].indexOf(mapgen_dirt_grass);
	if(mio2===-1){
		mio2=map[small].indexOf(mapgen_stone);
		}
	if(mio1>mio2){
		small=i;
		}
	
		}
	
	i=small;
		
	while(stop2===undefined){
		if(i===24){
		var stop2=24;
		}	
	else if(mapMeta[i].indexOf(true)<mapMeta[i+1].indexOf(true)){	
	if(mapMeta[i].indexOf(true)===mapMeta[i-1].indexOf(true)){
		var stop2=mapMetaVertical[mapMeta[i-1].indexOf(true)].lastIndexOf(false,i);
		}
	else{var stop2=i-1;}	
		}
		
	i++;
	}	
			
	g=small;
	while(stop1===undefined){
	if(g===0){
	var stop1=0;
	}
	else if(mapMeta[g].indexOf(true)<mapMeta[g-1].indexOf(true)){
	if(mapMeta[g].indexOf(true)===mapMeta[g+1].indexOf(true)){
	var stop1=mapMetaVertical[mapMeta[g+1].indexOf(true)].indexOf(false,g);
		}
	else{var stop1=g+1;}	
		}	
				
	g-=1;	
	}
	if(stop1===0){
	var m=0;	
		}
	else{
	m=mapMeta[stop1].indexOf(true);	
		}	
	if(stop2===24){
		n=0;
		}
	else{
	n=mapMeta[stop2].indexOf(true);	
		}
	maxmir=m-1;
	if(n>m){
	maxmir=n-1;
		}	
	var w=stop1;	
	while(w<=stop2)	{
	var s=maxmir;
	while(s<mapMeta[w].indexOf(true)){
	map[w][s]=mapgen_water;
	s++;
	}
	w++;	
		}
	for(x=0;x<25;x++){
	for(y=0;y<25;y++){
		Act(x,y)
		}
	}			
		
				
 }
Mapgens.push("Singlenode");
function SinglenodeMapGenerator(){
	for(x=0;x<25;x++){
		for(y=0;y<25;y++){
		map[x][y] = air;		
		}
	}
	updateAll();
}
