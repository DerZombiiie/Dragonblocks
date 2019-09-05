var stone={
name:"stone",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/stone.png)",
groups:[],
up:0,
brakedown:0,
hardness:10,
inv:{
	name:"Stone",
	mod:"default",
	},
}
var dirt={
name:"dirt",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/dirt.png)",
groups:["dirt"],
up:0,
brakedown:0,
hardness:3,
inv:{
	name:"Dirt",
	mod:"default",
	},
}
var dirt_grass={
name:"dirt_grass",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/dirt_grass.png)",
groups:["dirt"],
up:0,
brakedown:0,
hardness:3,
inv:{
	name:"Dirt with Grass",
	mod:"default",
	},
}
var lava={
name:"lava",
mobStability:false,
buildStability:true,
texture:"url(Mods/default/textures/lava.png)",
groups:["liquid"],
up:5,
brakedown:0.5,
shiftup:10,
hardness:1,
inv:{
	name:"Lava",
	mod:"default",
	},
}
shiftPhysicsBlocks.push(lava);
var water={
name:"water",
mobStability:false,
buildStability:true,
texture:"url(Mods/default/textures/water.png)",
groups:["liquid"],
up:12,
shiftup:7,
brakedown:0.5,
hardness:1,
inv:{
	name:"Water",
	mod:"default",
	},
}
shiftPhysicsBlocks.push(water);
var apple_sapling={
name:"apple_sapling",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/apple_sapling.png)",
groups:["farm"],
up:0,
brakedown:0,
growtime:180000,
growto:"appletree(x,y);",
hardness:2,
inv:{
	name:"Apple Sapling",
	mod:"default",
	},
}
var apple_tree={
name:"apple_tree",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/apple_tree.png)",
groups:[],
brakedown:0,
up:0,
hardness:7,
inv:{
	name:"Apple Tree",
	mod:"default",
	},
	}
var apple_leaves={
name:"apple_leaves",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/apple_leaves.png)",
groups:[],
brakedown:0,
up:0,
hardness:2,
inv:{
	name:"Apple Leaves",
	mod:"default",
	},
	}
var apple_wood={
name:"apple_wood",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/apple_wood.png)",
groups:[],
brakedown:0,
up:0,
hardness:6,
inv:{
	name:"Apple Wood",
	mod:"default",
	},
	}			
blocks.push(stone);
blocks.push(dirt);
blocks.push(dirt_grass);
blocks.push(lava);
blocks.push(water);
blocks.push(apple_sapling);
blocks.push(apple_tree);
blocks.push(apple_leaves);
blocks.push(apple_wood);

function appletree(x,y){
	setBlock(x,y-1,apple_wood);
	setBlock(x,y-2,apple_leaves);
	setBlock(x,y-3,apple_leaves);
	setBlock(x,y-4,apple_leaves);
	setBlock(x-1,y-2,apple_leaves);
	setBlock(x-1,y-3,apple_leaves);
	setBlock(x-1,y-4,apple_leaves);
	setBlock(x+1,y-2,apple_leaves);
	setBlock(x+1,y-3,apple_leaves);
	setBlock(x+1,y-4,apple_leaves);																				
	return apple_tree
	}
mapgen_stone = stone;
mapgen_water = water;
mapgen_dirt = dirt;
mapgen_dirt_grass = dirt_grass;
mapgen_lava = lava;


var glass={
name:"glass",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/glass.png)",
groups:[],
brakedown:0,
up:0,
hardness:4,
inv:{
	name:"Glass",
	mod:"default",
	},
	}
var gravel={
name:"gravel",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/gravel.png)",
groups:[],
brakedown:0,
up:0,
hardness:7,
inv:{
	name:"Gravel",
	mod:"default",
	},
	}
blocks.push(gravel);
var ice={
name:"ice",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/ice.png)",
groups:[],
brakedown:0,
up:0,
hardness:6,
inv:{
	name:"Ice",
	mod:"default",
	},
	}
blocks.push(ice);
var mese={
name:"mese",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/mese.png)",
groups:[],
brakedown:0,
up:0,
hardness:30,
inv:{
	name:"Mese",
	mod:"default",
	},
	}
blocks.push(mese);
var obsidian={
name:"obsidian",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/obsidian.png)",
groups:[],
brakedown:0,
up:0,
hardness:25,
inv:{
	name:"Obsidian",
	mod:"default",
	},
	}
blocks.push(obsidian);
var sand={
name:"sand",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/sand.png)",
groups:[],
brakedown:0,
up:0,
hardness:10,
inv:{
	name:"Sand",
	mod:"default",
	},
	}
blocks.push(sand);
var snow={
name:"snow",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/snow.png)",
groups:[],
brakedown:0,
up:0,
hardness:3,
inv:{
	name:"Snow",
	mod:"default",
	},
	}
blocks.push(snow);
var stonebrick={
name:"stonebrick",
mobStability:true,
buildStability:true,
texture:"url(Mods/default/textures/stonebrick.png)",
groups:[],
brakedown:0,
up:0,
hardness:10,
inv:{
	name:"Stone Brick",
	mod:"default",
	},
	}
blocks.push(stonebrick);
