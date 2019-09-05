	setTimeout(start,1500);
	function start(){
		player=document.getElementById('player');	
		window.addEventListener("keyup",brake);
		window.addEventListener("keydown",function(event){acc(event);a=true;});		
		allowKeyEvents();
		Generate();
		updateHudbar();
		DefaultMapGenerator();
		skin(playerSkin)
		spawn();
	}
	var player=document.getElementById('player');	
	var newWindow = document.getElementById('newWindow');
	var newWindowContent = document.getElementById('newWindowContent');
	document.getElementById("spielfeld").style.background="skyblue";
	document.getElementById("spielfeld").style.backgroundSize="cover";
	document.getElementsByTagName('body')[0].style.background="url(Menu/sky.png)";
	document.getElementsByTagName('body')[0].style.backgroundSize="cover";
	var Mapgens=[];
	var blocks = [];
	var ExtraMaps=[];
	var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var farmTimer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var mapString=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var mapMeta=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var mapStringVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var skins = {};
	var skinlist = [];
	var elements = [];
	elements.push("spielfeld");
	elements.push("ModExtras");
	var SpaceEvent = false;
	var EscapeEvent = false;
	var RightArrowEvent = false;
	var LeftArrowEvent = false;
	var LeftArrowEvent = false;
	var ShiftEvent = false;
	var IEvent = false;
	var NEvent = false;
	var BEvent = false;
	var	MouseWheelEvent = false;

	var shiftPhysicsBlocks = [];	
	var air={
name:"air",
mobStability:false,
buildStability:false,
texture:"none",
groups:["gas"],
up:0,
brakedown:1,
inv:{
	name:"Air",
	mod:"engine",
	},
}
blocks.push(air);


var mapgen_stone = air;
var mapgen_water = air;
var mapgen_dirt = air;
var mapgen_dirt_grass = air;
var mapgen_lava = air;
