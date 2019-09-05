if(SimpleDigging){
		stone.hardness=10;
		dirt.hardness=3;
		dirt_grass.hardness=3;
		water.hardness=1;
		lava.hardness=2;
		leaves.hardness=1;
		wood.hardness=7;
		sapling.hardness=3;
function simpledig(event){
	var cLeft=Math.floor(parseInt(event.pageX-parseInt(spielfeld.style.left))/30);
	var cTop=Math.floor(parseInt(event.pageY-parseInt(spielfeld.style.top))/30);
	if(map[cLeft][cTop].buildStability===true){
		if(SimpleBuilding){
				document.getElementById(blocks[selectItem].name+'OnBar').style.boxShadow="none";
			selectItem=blocks.indexOf(air);
				document.getElementById(blocks[selectItem].name+'OnBar').style.boxShadow="0 0 0 3px #cc0000 inset";

			}
	hard=map[cLeft][cTop].hardness+1;
	mark=false;
	document.getElementById('bar').style.visibility="visible";
	sddig(cLeft,cTop);
	sdField.addEventListener("mouseup",function(){if(sdTo){clearTimeout(sdTo);}mark=true;document.getElementById('bar').style.visibility="hidden";});
	}}
function sddig(L,T){
	hard-=1;
	document.getElementById('barstatus').style.height=hard*50+"px";
	
	if(hard===0){
		map[L][T]=air;
		for(i=0;i<25;i++){
			Act(L,i);
			}
		document.getElementById('bar').style.visibility="hidden";	
		mark=true;
		
		}
	else{
	sdTo=setTimeout(sddig, 250, L, T);	
		}	
	}	 
function sdtap(event){
	if(mark){
	var tLeft=Math.floor(parseInt(event.pageX-parseInt(spielfeld.style.left))/30);
	var tTop=Math.floor(parseInt(event.pageY-parseInt(spielfeld.style.top))/30);
	
	if(sdsource){
	sdsource.style.boxShadow="none";
	}
	var sdTo=null;
	if(document.getElementsByName('zeile'+tTop)[tLeft]!=undefined){
	sdsource=document.getElementsByName('zeile'+tTop)[tLeft];
	if(map[tLeft][tTop]&&map[tLeft][tTop].buildStability===true){
	sdsource.style.boxShadow="0 0 0 1px red inset";
}
}
}
	}
function SimpleDigging_setMode(digmode){
	var digmodes=["Creative","Survival"];
	if(digmodes.indexOf(digmode)!=-1){
		if(digmode==="Creative"){
			nodeUseHardness=0;
			}
		else if(digmode==="Survival"){
			nodeUseHardness=nodeHardness;
			}	
		}
	else{
	window.alert("Invalid Digmode")	
		}	
	return "allowed"
	}	
var hard=0;	
var sdsource=false;	
var mark=true;
var sdTo=null;
var sdField=document.getElementById('spielfeld');
sdField.addEventListener("mousedown", simpledig);
sdField.addEventListener("mouseover", sdtap);
allowedCommands.push("SimpleDigging_setMode");


document.getElementById('ModExtras').innerHTML='<div id="bar" style="background-color:green;opacity:0.7;position:absolute;top:200px;left:1200px;border-style:solid;border-color:black;visibility:hidden;background-size:cover;border-width:5px;border-radius:10%;width:50px;height:500px;"><div id="barstatus" style="position:absolute;left:0px;bottom:0px;width:50px;border-radius:10%;background-color:brown"></div></div>';


}
