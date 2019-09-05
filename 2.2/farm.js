function grow(x,y){
	map[x][y]=eval(map[x][y].growto);
	Act(x,y);
	}
function tree(x,y){

	if(!map[x][y-1].buildStability){
		map[x][y-1]=wood;
Act(x,y-1);
		}
      
	if(!map[x][y-2].buildStability){
		map[x][y-2]=leaves;
    Act(x,y-2);
		}
		if(!map[x][y-3].buildStability){
		map[x][y-3]=leaves;
Act(x,y-3);
		}
		if(!map[x][y-4].buildStability){
		map[x][y-4]=leaves;
Act(x,y-4);
		}	
		if(!map[x-1][y-2].buildStability){
		map[x-1][y-2]=leaves;
Act(x-1,y-2);
		}
	if(!map[x-1][y-3].buildStability){
		map[x-1][y-3]=leaves;
Act(x-1,y-3);
		}	
	if(!map[x-1][y-4].buildStability){
		map[x-1][y-4]=leaves;
Act(x-1,y-4);
		}
	if(!map[x+1][y-2].buildStability){
		map[x+1][y-2]=leaves;
Act(x+1,y-2);
		}
	if(!map[x+1][y-3].buildStability){
		map[x+1][y-3]=leaves;
Act(x+1,y-3);
		}
	if(!map[x+1][y-4].buildStability){
		map[x+1][y-4]=leaves;
Act(x+1,y-4);
		}																					
	return wood
	}
