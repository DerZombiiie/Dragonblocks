Mapgens.push("lake");
function lakeMapGenerator(){
defaultMapGenerator();
		
	var small=0;
	for(i=0;i<25;i++){
		var mio1=map[i].indexOf(dirt_grass);
	if(mio1===-1){
		mio1=map[i].indexOf(stone);
		}
	var mio2=map[small].indexOf(dirt_grass);
	if(mio2===-1){
		mio2=map[small].indexOf(stone);
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
	else if(mapMeta[g].indexOf(true)<mapMeta[g-1].indexOf(true)){
	if(mapMeta[g].indexOf(true)===mapMeta[g+1].indexOf(true)){
	var stop1=mapMetaVertical[mapMeta[g+1].indexOf(true)].indexOf(false,g);
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
	map[w][s]=water;
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
