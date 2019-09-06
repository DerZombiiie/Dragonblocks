var mySound = new sound("Mods/sounddemo/sounds/fuck.MP3");
var fuck={
name:"fuck",
mobStability:true,
buildStability:true,
texture:"red",
groups:["farm"],
growtime:0,
growto:"fucksound();",  
up:0,
brakedown:0,
hardness:10,
inv:{
	name:"Play Fuck Sound",
	mod:"sounddemo",
	},
}
function fucksound(){
mySound.play();
return air;
}
