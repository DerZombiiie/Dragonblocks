if(SimpleBuilding){
function simplebuild(eventb){
	var cbLeft=Math.floor(parseInt(eventb.pageX-parseInt(spielfeld.style.left))/30);
	var cbTop=Math.floor(parseInt(eventb.pageY-parseInt(spielfeld.style.top))/30);
	if(!map[cbLeft][cbTop].buildStability){
	map[cbLeft][cbTop]=blocks[selectItem];
    Act(cbLeft,cbTop);
	}}
	
function sbtap(eventb){
	if(markb){
	var tLeft=Math.floor(parseInt(eventb.pageX-parseInt(spielfeld.style.left))/30);
	var tTop=Math.floor(parseInt(eventb.pageY-parseInt(spielfeld.style.top))/30);
	
	if(sbsource){
	sbsource.style.boxShadow="none";
	}
	var sdTo=null;
	if(document.getElementsByName('zeile'+tTop)[tLeft]!=undefined){
	sbsource=document.getElementsByName('zeile'+tTop)[tLeft];
	if(map[tLeft][tTop]&&!map[tLeft][tTop].buildStability){
	sbsource.style.boxShadow="0 0 0 1px blue inset";
}

}
}
	}
	
	function selectNew(evt25){

	document.getElementById(blocks[selectItem].name+'OnBar').style.boxShadow="none";
	if(evt25.key==="ArrowDown"){
	evt25.preventDefault();
	selectItem+=1;
	if(selectItem===blocks.length){
		selectItem=0;
		}
	}
	if(evt25.key==="ArrowUp"){
	evt25.preventDefault();
	selectItem-=1;
	if(selectItem===-1){
		selectItem=blocks.length-1;
		}
	}
	document.getElementById(blocks[selectItem].name+'OnBar').style.boxShadow="0 0 0 3px #cc0000 inset";
	}
var selectItem=0;
var sbsource=false;	
var markb=true;
var sbTo=null;
var sbField=document.getElementById('spielfeld');
sbField.addEventListener("mousedown", simplebuild);
sbField.addEventListener("mouseover", sbtap);
window.addEventListener("keyup", selectNew);
document.getElementById('ModExtras').innerHTML='<div id="itembar" style="position:absolute;top:900px;left:50px;height:60px;background:darkgrey;border-style:solid;border-color:grey"></div>'+document.getElementById('ModExtras').innerHTML;
var itembar=document.getElementById('itembar');
itembar.style.width=blocks.length*50+10+"px";

for(i=0;i<blocks.length;i++){
itembar.innerHTML='<div id="'+blocks[i].name+'OnBar"style="width:40px;height:40px;position:absolute;top:10px;border:solid 1px;left:'+parseInt(i*50+10)+'px;background-image:'+blocks[i].texture+';background-size:cover"></div>'+itembar.innerHTML; 

}
document.getElementById(blocks[selectItem].name+'OnBar').style.boxShadow="0 0 0 3px #cc0000 inset";

}
