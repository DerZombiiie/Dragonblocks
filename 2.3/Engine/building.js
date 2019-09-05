function sbctl(x,y){
	if(Math.floor(xpos)===x&&Math.floor(ypos)===y){
		return false;
		}
	if(Math.ceil(xpos)===x&&Math.floor(ypos)===y){
		return false;
		}
	if(Math.floor(xpos)===x&&Math.ceil(ypos)===y){
		return false;
		}	
	if(Math.ceil(xpos)===x&&Math.ceil(ypos)===y){
		return false;
		}	
	return true;	
	}	
function simplebuild(eventb){
	eventb.preventDefault();
	var cbLeft=Math.floor(parseInt(eventb.pageX-parseInt(spielfeld.style.left))/30);
	var cbTop=Math.floor(parseInt(eventb.pageY-parseInt(spielfeld.style.top))/30);
	if(sbctl(cbLeft,cbTop)){
	if(!map[cbLeft][cbTop].buildStability){
	map[cbLeft][cbTop]=hudbar[selectItem];
    Act(cbLeft,cbTop);
	}
	else{
		 Act(cbLeft,cbTop);
		}
	}}
	
function sbtap(eventb){
	var tLeft=Math.floor(parseInt(eventb.pageX-parseInt(spielfeld.style.left))/30);
	var tTop=Math.floor(parseInt(eventb.pageY-parseInt(spielfeld.style.top))/30);
	
	if(sbsource){
	sbsource.style.boxShadow="none";
	}
	var sdTo=null;
	if(document.getElementsByName('zeile'+tTop)[tLeft]!=undefined){
	sbsource=document.getElementsByName('zeile'+tTop)[tLeft];
	sbsource.style.boxShadow="0 0 0 1px black inset";
}
}
var sbsource=false;	
var sbTo=null;
var sbField=document.getElementById('spielfeld');
sbField.addEventListener("contextmenu", simplebuild);
sbField.addEventListener("mouseover", sbtap);
	
	
