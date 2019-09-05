Mapgens.push("flat");
function flatMapGenerator(){
for(x=0;x<25;x++){
	for(y=0;y<25;y++){
	if(y<12){
		node=air;
		}
		
		
		
	else if(y<17){
		node=dirt;
	}
	else{
		node=stone;
	}
	map[x][y]=node;
	
	Act(x,y);
		}}
	
	return "allowed"
 }
	
