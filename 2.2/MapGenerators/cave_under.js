Mapgens.push("Cave");
function CaveMapGenerator(){
	defaultMapGenerator();
	var x=Math.floor(Math.random()*25);
    var y=Math.floor(Math.random()*7)+18;
    console.log(x+'|'+y);
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
