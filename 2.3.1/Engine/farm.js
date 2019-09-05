function grow(x,y){
	map[x][y]=eval(map[x][y].growto);
	Act(x,y);
	}
