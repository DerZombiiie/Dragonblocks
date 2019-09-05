var stone={
	name:"stone",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/stone.png)",
groups:["stonebased"],
up:0,
brakedown:0,
}
var air={
	name:"air",
mobStability:false,
buildStability:false,
liquids:false,
texture:"none",
groups:["gas"],
up:0,
brakedown:0.9,
}
var dirt={
name:"dirt",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/dirt_normal.png)",
groups:["dirt"],
up:0,
brakedown:0,
}
var dirt_grass={
	name:"dirt_grass",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/dirt.png)",
groups:["dirt"],
up:0,
brakedown:0,
}
var lava={
	name:"lava",
mobStability:false,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/lava.png)",
groups:["liquid"],
up:5,
orginup:5,
brakedown:0.5,
shiftup:10
}
var water={
name:"water",
mobStability:false,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/water.png)",
groups:["liquid","waterbased"],
up:12,
shiftup:7,
orginup:12,
brakedown:0.5,
}
var sapling={
name:"sapling",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/sapling.png)",
groups:["plants","farm"],
up:0,
brakedown:0,
farm:true,
growtime:180000,
growto:"tree(x,y);",
}
var wood={
name:"wood",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/wood.png)",
groups:["plants","woodbased"],
brakedown:0,
up:0,
	}
var leaves={
name:"leaves",
mobStability:true,
buildStability:true,
liquids:false,
texture:"url(TexturePacks/"+TexturePack+"/leaves.png)",
groups:["plants"],
brakedown:0,
up:0,
	}	
var blocks=[stone,air,dirt,dirt_grass,lava,water,sapling,wood,leaves];
