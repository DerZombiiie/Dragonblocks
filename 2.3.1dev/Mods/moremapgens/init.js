//Declarations
var Mapgens2 = [];

var mapgen_snow = air;
var mapgen_ice = air;
var mapgen_sapling = air;
var mapgen_planks = air;
var mapgen_cobble = air;
var mapgen_door1 = air;
var mapgen_door2 = air;
var mapgen_bedrock = air;
//Modules to improve the Default Mapgens

	function smoothMapgen(){
		 for(x=0;x<25;x++){
			 y=mapMeta[x].indexOf(true);
			 if(map[x-1]&&map[x+1]&&map[x+1][y]===air&&map[x-1][y]===air){
				 map[x][y]=air;
				 }
				 y--;
			 if(map[x-1]&&map[x+1]&&map[x+1][y].groups.indexOf("dirt")!=-1&&map[x-1][y].groups.indexOf("dirt")!=-1){
				 map[x][y]=mapgen_dirt;
				 }	 
				 
			Act(x,y);	 
			 }
		updateAll();	 
		 }
		function wateroverflowMapgen(){
			for(x=0;x<25;x++){
				for(y=0;y<8;y++){
					if(map[x][y] === mapgen_water){
						map[x][y] = air;
						}
					}
				}
			} 

 function forestMapgen(){
	 var stime=mapgen_sapling.growtime;
	 mapgen_sapling.growtime=0;
	 var treenr=Math.floor(Math.random()*3)+3;
	 var treepos=[];
	 var tries=100;
	 for(i=0;i<=treenr;i++){
		 place=true;
		 rpos=false;
		while(!rpos){
			var tp=Math.floor(Math.random()*25);
			rpos=true;
			for (g=0;g<treepos.length;g++){
				if(Math.abs(tp-treepos[g])<3){
				rpos=false;
				tries--;
					}
				}
			if(map[tp][mapMeta[tp].indexOf(true)].groups.indexOf("dirt")===-1){
				rpos=false;
				tries--;
					}
			if(tries<=0){
					rpos=true;
					place=false;
					}		
			
			}
			if(place){
			treepos.push(tp);
			setBlock(tp,mapMeta[tp].indexOf(true)-1,mapgen_sapling);	
		}
		 }
	updateAll();
	mapgen_sapling.growtime=stime;
	 }	
	function villageMapgen(){
		var housenr = 1 + Math.floor(Math.random()*3);
		var houses = [];
		var leftspace = 25;
		for(i=0;i<housenr;i++){
			houses[i] = {
				width:[5,6][Math.floor(Math.random()*2)],
				height:[3,4][Math.floor(Math.random()*2)],
				rightalign:[true,false][Math.floor(Math.random()*2)],
				glaswidth:[2,3][Math.floor(Math.random()*2)],
				}
			leftspace -= houses[i].width + 2;		
			}		
		var moves = [];	
		var themove = Math.ceil(leftspace/(housenr+1));
		for(i=0;i<housenr;i++){
			var mymoveto = 0;
			mymoveto += themove*(i+1);
			for(g=0;g<i;g++){
				mymoveto += houses[g].width + 2;
				}
			mymoveto++;	
			moves.push(mymoveto);
			}
		for(i=0;i<housenr;i++){
			var xstart = moves[i];
			var xend = moves[i] + houses[i].width;
			var bottom = mapMeta[xstart].indexOf(true);
			var top = mapMeta[xstart].indexOf(true)-houses[i].height;
			for(x=xstart;x<=xend;x++){
				for(y=top;y<bottom;y++){
					setBlockForce(x,y,mapgen_planks);
					if(y!=top&&y!=bottom-1){
						if(houses[i].rightalign){
							if(x!=xstart&&x!=xend&&x!=xend-1&&x!=xend-2){
								setBlockForce(x,y,mapgen_glass);
								}
							}
						else{
							if(x!=xstart&&x!=xend&&x!=xstart+1&&x!=xstart+2){
								setBlockForce(x,y,mapgen_glass);
								}
							}	
						}
					}
				setBlockForce(x,top-1,mapgen_cobble);
				setBlockForce(x,top-2,mapgen_cobble);
				for(y=0;y<25;y++){
					if(y>top){
						setBlock(x,y,mapgen_dirt);
						}
					}			
				}
			setBlockForce(xstart-1,top-1,mapgen_cobble);
			setBlockForce(xend+1,top-1,mapgen_cobble);
			if(houses[i].rightalign){
				setBlockForce(xend-1,bottom-1,mapgen_door2);
				setBlockForce(xend-1,bottom-2,mapgen_door1);
				}
			else{
				setBlockForce(xstart+1,bottom-1,mapgen_door2);
				setBlockForce(xstart+1,bottom-2,mapgen_door1);	
				}
			}
			updateAll();		
		 }
//Map generators			
Mapgens2.push("Snowlands");
function SnowlandsMapGenerator(){
	GrasslandsMapGenerator();
	for(x=0;x<25;x++){
		for(y=0;y<25;y++){
			if(map[x][y] === mapgen_dirt||map[x][y] === mapgen_dirt_grass){
				map[x][y] = mapgen_snow;
				}
			if(map[x][y-1] === air&&map[x][y] === mapgen_water){
				map[x][y] = mapgen_ice;
				}	
			}
		}
		updateAll();
	}
Mapgens2.push("Grasslands");
function GrasslandsMapGenerator(){
	clearMap();
	basicMapgen();
	smoothMapgen();
	lakeMapgen();
	wateroverflowMapgen();
	caveMapgen();
	}	
Mapgens2.push("Forestlands");
function ForestlandsMapGenerator(){
	clearMap();
	basicMapgen();
	smoothMapgen();
	lakeMapgen();
	wateroverflowMapgen();
	caveMapgen();
	forestMapgen();
	}
Mapgens2.push("Village");
function VillageMapGenerator(){
	clearMap();
	basicMapgen();
	smoothMapgen();
	caveMapgen();
	villageMapgen();
	}
Mapgens.unshift("v2");
function v2MapGenerator(){
	var mymapgen = Mapgens2[Math.floor(Math.random()*Mapgens2.length)];
	eval(mymapgen+"MapGenerator();");
	}
Mapgens.push("Superflat");
function SuperflatMapGenerator(){
	clearMap();
	for(x=0;x<25;x++){
		for(y=0;y<25;y++){
			map[x][y] = air;
			if(y===22||y===23){
				map[x][y] = mapgen_dirt;
				}
			if(y===24){
				map[x][y] = mapgen_bedrock;
				}	
			}
		}
		updateAll();
	}				
//add support for the game
mapgen_ice = ice;
mapgen_snow = snow;
mapgen_sapling = apple_sapling;
mapgen_planks = apple_wood;
mapgen_cobble = stonebrick;
mapgen_glass = glass;
mapgen_door1 = useless_door_wood1;
mapgen_door2 = useless_door_wood2;
mapgen_bedrock = mc_bedrock;
