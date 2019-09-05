function lakeMapGenerator(){
var middleGenerator=["air","air","dirt"];
var groundGenerator=["lava","stone"];
var ground2Generator=["dirt","stone"]
for(x=0;x<25;x++){
	for(y=0;y<25;y++){
	if(y<7){
		node="air";
		}
		
		
		
	else if(y<16){
		
	if(map[x][y-1]==="dirt"||map[x][y-1]==="dirt_grass"){
	node="dirt";
	}
	else if(map[x-1]){
		var dp=map[x-1].indexOf("dirt_grass");
		if(dp==-1){dp=map[x-1].indexOf("stone")}
	if(dp>y+1){
			node="air";
	}
	
	else if(map[x-1][y-1]=="dirt"||map[x-1][y-1]=="dirt_grass"){
			node="dirt";
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
		if(map[x][y-1]==="stone"){
		node="stone";
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
		node="stone";
		}
			
	map[x][y]=node;
	
	Act(x,y);
		}}
		
		
		
	var small=0;
	for(i=0;i<25;i++){
		var mio1=map[i].indexOf("dirt_grass");
	if(mio1===-1){
		mio1=map[i].indexOf("stone");
		}
	var mio2=map[small].indexOf("dirt_grass");
	if(mio2===-1){
		mio2=map[small].indexOf("stone");
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
	else if(mapMeta[i].indexOf("solid")<mapMeta[i+1].indexOf("solid")){	
	if(mapMeta[i].indexOf("solid")===mapMeta[i-1].indexOf("solid")){
		var stop2=mapMetaVertical[mapMeta[i-1].indexOf("solid")].lastIndexOf("labil",i);
		console.log(stop2);
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
	else if(mapMeta[g].indexOf("solid")<mapMeta[g-1].indexOf("solid")){
	if(mapMeta[g].indexOf("solid")===mapMeta[g+1].indexOf("solid")){
	var stop1=mapMetaVertical[mapMeta[g+1].indexOf("solid")].indexOf("labil",g);
	console.log(stop1);
		}
	else{var stop1=g+1;}	
		}	
				
	g-=1;	
	}
	if(stop1===0){
	var m=0;	
		}
	else{
	m=mapMeta[stop1].indexOf("solid");	
		}	
	if(stop2===24){
		n=0;
		}
	else{
	n=mapMeta[stop2].indexOf("solid");	
		}
	maxmir=m-1;
	if(n>m){
	maxmir=n-1;
		}	
	var w=stop1;	
	while(w<=stop2)	{
	var s=maxmir;
	while(s<mapMeta[w].indexOf("solid")){
	map[w][s]="water";
	s++;
	}
	w++;	
		}
	for(x=0;x<25;x++){
	for(y=0;y<25;y++){
		Act(x,y)
		}
	}			
		
				
	return "allowed"
 }
