var nodeConfig={
	stone:"solid",
	air:"labil",
	dirt:"solid",
	lava:"liquid_lava",
	water:"liquid_water"
	}
var middleGenerator=["air","stone","dirt"];
var groundGenerator=["lava","stone"]	
var nodeTextures={
	stone:"url(stone.jpeg)",
	air:"none",
	dirt:"url(dirt.jpg)",
	lava:"url(lava.jpg)",
	water:"url(water.jpg)"
	}	
var frequency=5000;	
var map=[];
var mapMeta=[];
var mapVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var mapMetaVertical=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var player=document.getElementById('player');
Generate();
mapGenerate();
function Generate(){
	for(x=0;x<25;x++){
	source=document.getElementsByName('spalte'+x)[0];
	source.style.position="absolute";
	source.style.top="0px";
	source.style.left=x*30+"px";
	source.style.width="30px";
	source.style.height="750px";
	source.style.borderWidth="1px";
	for(y=0;y<25;y++){
	source=document.getElementsByName('zeile'+y)[x];
	source.style.position="absolute";
	source.style.top=y*30+"px";
	source.style.left="0px";
	source.style.width="30px";
	source.style.height="30px";
	source.style.borderWidth="1px";
	source.style.borderStyle="solid";
	}
	}
}
function mapGenerate(){
for(x=0;x<25;x++){
	map.push([]);
	mapMeta.push([]);
	for(y=0;y<25;y++){
	if(y<15){
		node="air";
		}
	else if(y<20){
	var f=Math.floor(Math.random()*3);	
		node=middleGenerator[f];
		}
		
	else if (y>23){
		node="lava";
		}
	else if(y>22){
	var e=Math.floor(Math.random()*2);	
	node=groundGenerator[e];	
		}		
	else{
		node="stone";
		}	
	map[x].push(node);
	mapMeta[x].push("");
	Act(x,y);
		}
	}
 }

	function Act(x,y){
	source=document.getElementsByName('zeile'+y)[x];
	source.style.background=nodeTextures[map[x][y]];
	source.style.backgroundSize="cover";
	mapMeta[x][y]=nodeConfig[map[x][y]];
	mapVertical[y][x]=map[x][y];
	mapMetaVertical[y][x]=nodeConfig[mapVertical[y][x]];
				}
	var skins={
	green:"green",
	black:"black",
	fire:"url(Skins/fire.jpeg)",
	kion:"url(Skins/kion.jpg)",
	minetest:"url(Skins/minetest.png)",
	red:"red",
	yellow:"yellow",
	bumblebee:"url(Skins/hummel.jpg)",
	dragon:"url(Skins/drache.png)",
	ghost:"none",
	sam:"url(Skins/sam.png)",
	blue:"blue",
	toast:"url(Skins/toast.png)",
	shit:"url(Skins/shit.png)"
	}
	var playerSkin="black";
	player.style.background=skins[playerSkin];
	player.style.backgroundSize="cover";


	function skin(){
		playerSkin=window.prompt("Set a new Skin");
		if(!playerSkin||!skins[playerSkin]){
			playerSkin="black";
			}
		player.style.background=skins[playerSkin];
		player.style.backgroundSize="cover";
		window.alert("Skin set to "+playerSkin);	
		}
	var xpos=0;
	var ypos=0;	
	var xvelocity=0;
	var yvelocity=0;
	var gravity=9.81;
	var maxxvelocity=8;
	var acceleration=8;
	var bpoint=0.0011;
	spawn();
	function spawn(){	
	xpos=12;
	ypos=0;
	player.style.top=ypos*30+"px";
	player.style.left=xpos*30+"px";
	fall();
	
}
	function fall(){
	var posConfig=[mapMeta[Math.ceil(xpos)][Math.ceil(ypos)],mapMeta[Math.ceil(xpos)][Math.floor(ypos)],mapMeta[Math.floor(xpos)][Math.ceil(ypos)],mapMeta[Math.floor(xpos)][Math.floor(ypos)]];
	if(posConfig.indexOf("liquid_water")!=-1){
	 gravity=5;
	 maxxvelocity=5;
	 acceleration=3;
		}
	else if(posConfig.indexOf("liquid_lava")!=-1){
	 gravity=3;
	 maxxvelocity=2;
	 acceleration=1;
	 console.log(gravity);
		}
	else{
	 gravity=9.81;
	 maxxvelocity=8;
	 acceleration=8;
		}	
		
	var deep=Math.min(mapMeta[Math.floor(xpos)].indexOf("solid", ypos),mapMeta[Math.ceil(xpos)].indexOf("solid", ypos));
	if (deep===-1){
		deep=25
		}
	if ((ypos+1)<deep){
		a=false;
		yvelocity+=gravity/frequency;
		if((ypos+1+yvelocity)<deep){
		ypos+=yvelocity;
		}
		else{
		ypos=deep-1
		yvelocity=0;	
			}
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		setTimeout(fall, 1000/frequency);
		}	
		}
	var to="";	
	var a=true;
	function acc(evt){
		var posConfig=[mapMeta[Math.ceil(xpos)][Math.ceil(ypos)],mapMeta[Math.ceil(xpos)][Math.floor(ypos)],mapMeta[Math.floor(xpos)][Math.ceil(ypos)],mapMeta[Math.floor(xpos)][Math.floor(ypos)]];
	if(posConfig.indexOf("liquid_water")!=-1){
	 gravity=5;
	 maxxvelocity=5;
	 acceleration=3;
	 bpoint=0.0005
		}
	else if(posConfig.indexOf("liquid_lava")!=-1){
	 gravity=3;
	 maxxvelocity=2;
	 acceleration=1;
	 bpoint=0.0001
		}
	else{
	 gravity=9.81;
	 maxxvelocity=8;
	 acceleration=8;
	 bpoint=0.0011;
		}	
		
		if(evt.key==="ArrowLeft"&&a){
			var maxleft=Math.max(mapMetaVertical[Math.floor(ypos)].lastIndexOf("solid",xpos),mapMetaVertical[Math.ceil(ypos)].lastIndexOf("solid",xpos));	
		
			if(xvelocity*frequency>=(-maxxvelocity)){
				xvelocity-=acceleration/frequency;
				}
		if(((xpos+xvelocity)>=0)&&(xpos+xvelocity-1)>=maxleft){		
		xpos+=xvelocity;
	}
	if(Math.abs(Math.round(xpos)-xpos)<bpoint){
			xpos=Math.round(xpos);
			}
	
		
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		fall();	
to=setTimeout(acc, 1000/frequency,evt);	
			}
		if(evt.key==="ArrowRight"&&a){
				var maxright=Math.min(mapMetaVertical[Math.floor(ypos)].indexOf("solid",xpos+1),mapMetaVertical[Math.ceil(ypos)].indexOf("solid",xpos+1))-1;	
	if(maxright===-1||maxright===-2){
		maxright=25;
		}
	
		
			if(xvelocity*frequency<=maxxvelocity){
				xvelocity+=acceleration/frequency;
				}
		if((xpos+xvelocity<=24)&&(xpos+xvelocity)<=maxright){		
		xpos+=xvelocity;
	}
		if(Math.abs(Math.round(xpos)-xpos)<bpoint){
			xpos=Math.round(xpos);
			}
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		fall();		
to=setTimeout(acc, 1000/frequency, evt);		
			}
			
		}
		function brake(evt)	{
			if(evt.key==="ArrowLeft"||evt.key==="ArrowRight"){
			a=false;
			clearTimeout(to);
				if(Math.abs(Math.round(xpos)-xpos)<0.01){
			xpos=Math.round(xpos);
			}
			xvelocity=0;
			fall();
		}
			}
		var allowedCommands=["skin","spawn","mapping1"];
		function command(evt){
			if(evt.key==="Enter"){
				var cmd=document.getElementById('commands').value;
				if(allowedCommands.indexOf(cmd)!=-1){
				eval(cmd+"();");	
					}
				else{
				window.alert("Unknown Command");	
					}	
				
				}
			}	
	
		
	

