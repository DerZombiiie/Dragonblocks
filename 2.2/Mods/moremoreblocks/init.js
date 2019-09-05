if(moremoreblocks)	{
var moor={name:"moor",
mobStability:false,
buildStability:false,
liquids:true,
texture:"url(Mods/moremoreblocks/textures/moor.png)",
groups:["water"],
up:9.50,
brakedown:0.20,
};
var snake={name:"snake",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moremoreblocks/textures/snake.png)",
groups:[""],
up:0,
brakedown:0,
farm:true,
growtime:500,
growto:"snakegrow(x,y);",
};
var tnt={name:"tnt",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(Mods/moremoreblocks/textures/tnt.png)",
groups:[""],
up:0,
brakedown:0,
farm:true,
growtime:1,
growto:"tntexplode(x,y);",
};

function snakegrow(x,y) {

map[x][y]=air;
Act(x,y);
map[x][y+1]=snake;
Act(x,y+1);
	
}

function setblock(x,y,block) {
	map[x][y]=block;
	Act(x,y);
	
}

function tntexplode(x,y) {
document.getElementById('tnt').play();
setTimeout(function() {
setblock(x,y,air);
setblock(x,y+1,air);
setblock(x,y+2,air);
setblock(x+1,y+2,air);
setblock(x,y-1,air);
setblock(x-1,y+2,air);
setblock(x,y-2,air);
setblock(x+1,y+1,air);

setblock(x+1,y-2,air);
setblock(x-1,y-1,air);
setblock(x-1,y-2,air);

setblock(x-1,y,air);
setblock(x+1,y,air);

setblock(x+2,y+1,air);
setblock(x+2,y,air);
setblock(x+1,y-1,air);

setblock(x-2,y+1,air);
setblock(x-2,y,air);
setblock(x-2,y-1,air);

setblock(x-1,y+1,air);
setblock(x+2,y-1,air);
}, 5000)

}
}


blocks.push(moor);
blocks.push(snake);
blocks.push(tnt);
if(SimpleDigging){

moor.hardness=5;


}
