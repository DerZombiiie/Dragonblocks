    var xpos=0;// x position of the player: 0-24
	var ypos=0;	//y position of the player: 0-24
	var xvelocity=0;// x speed
	var yvelocity=0;//  y speed
	


	var usegravity=false;
	
	function fall(usegravity){
	
	var deep=Math.min(mapMeta[Math.floor(xpos)].indexOf(true, ypos),mapMeta[Math.ceil(xpos)].indexOf(true, ypos));
	var high=Math.max(mapMeta[Math.floor(xpos)].lastIndexOf(true,  ypos),mapMeta[Math.ceil(xpos)].lastIndexOf(true, ypos))+1;
	

	if (deep===-1){
		deep=24;
		}


used=usegravity;		
var vals=getPosConf();

var agag=(usegravity-map[vals[4]][vals[5]].up)*vals[0];
var agbg=(usegravity-map[vals[4]][vals[7]].up)*vals[1];
var bgag=(usegravity-map[vals[6]][vals[5]].up)*vals[2];
var bgbg=(usegravity-map[vals[6]][vals[7]].up)*vals[3];	

var akak=(map[vals[4]][vals[5]].brakedown)*vals[0];
var akbk=(map[vals[4]][vals[7]].brakedown)*vals[1];
var bkak=(map[vals[6]][vals[5]].brakedown)*vals[2];
var bkbk=(map[vals[6]][vals[7]].brakedown)*vals[3];	

usegravity=agag+bgag+agbg+bgbg;
var brakeFall=akak+bkak+akbk+bkbk;

		yvelocity+=usegravity/frequency;
		yvelocity=yvelocity*brakeFall;
	
	
	if ((ypos+yvelocity+1)<=deep){
	if((ypos+yvelocity)>high){	
		ypos+=yvelocity;
		}
	else{
		ypos=high;
		yvelocity=0;
		}
			}
			
		
		
		
		else{
		ypos=deep-1;
		yvelocity=0;
		}
	
		fto=setTimeout(fall, 1000/frequency, used);
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		
		
		
		
		
		
		}
		
	var fto="";	
	var to="";	
	var a=true;
	var b=true;
	var c=false;
	var  d=true;
	function acc(evt){
	
		
		if(evt.key==="ArrowLeft"&&a){
			var maxleft=Math.max(mapMetaVertical[Math.floor(ypos)].lastIndexOf(true,xpos),mapMetaVertical[Math.ceil(ypos)].lastIndexOf(true,xpos));	
			vals=getPosConf();
			var akak=(map[vals[4]][vals[5]].brakedown)*vals[0];
			var akbk=(map[vals[4]][vals[7]].brakedown)*vals[1];
			var bkak=(map[vals[6]][vals[5]].brakedown)*vals[2];
			var bkbk=(map[vals[6]][vals[7]].brakedown)*vals[3];	
			var brakeMov=akak+bkak+akbk+bkbk;
			
			if(xvelocity*frequency*brakeMov>=(-maxxvelocity)){
				xvelocity-=acceleration/frequency;
					
				}
		xvelocity*=brakeMov;		
		if(((xpos+xvelocity)>=0)&&(xpos+xvelocity-1)>=maxleft){		
		xpos+=xvelocity;
		
		
		
	}
	else{
		brake({key:"ArrowLeft"});
		}
	
	
		
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
	
to=setTimeout(acc, 1000/frequency,evt);
	
			}
		if(evt.key==="ArrowRight"&&a){
	var maxright=Math.min(mapMetaVertical[Math.floor(ypos)].indexOf(true,xpos+1),mapMetaVertical[Math.ceil(ypos)].indexOf(true,xpos+1))-1;	
	if(maxright===-1||maxright===-2){
		maxright=25;
		}
vals=getPosConf();
			var akak=(map[vals[4]][vals[5]].brakedown)*vals[0];
			var akbk=(map[vals[4]][vals[7]].brakedown)*vals[1];
			var bkak=(map[vals[6]][vals[5]].brakedown)*vals[2];
			var bkbk=(map[vals[6]][vals[7]].brakedown)*vals[3];	
			var brakeMov=akak+bkak+akbk+bkbk;
			
			if(xvelocity*frequency*brakeMov<=maxxvelocity){
				xvelocity+=acceleration/frequency;
					
				}
		xvelocity*=brakeMov;	
		if((xpos+xvelocity<=24)&&(xpos+xvelocity)<=maxright){		
		xpos+=xvelocity;
		
		
	}
	
	else{
		brake({key:"ArrowRight"});
		}
		
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		
to=setTimeout(acc, 1000/frequency, evt);
		
			}
			
	if(evt.keyCode==32){
		
	evt.preventDefault();
	if(map[Math.floor(xpos)][Math.floor(ypos)+1].mobStability||map[Math.ceil(xpos)][Math.floor(ypos)+1].mobStability){
	yvelocity=-500/frequency;
	
		
		}}
	if(evt.key==="Shift"){	
	water.up=water.shiftup;
	lava.up=lava.shiftup;
		}			
	}
	
		
		function brake(evt)	{
			if(evt.key==="ArrowLeft"||evt.key==="ArrowRight"){
			if(Math.abs(Math.round(xpos)-xpos)<bpoint){
			xpos=Math.round(xpos);
			}
			clearTimeout(to);
			xvelocity=0;
			a=false;
		}
		if(evt.key==="Shift"){
		water.up=water.orginup;		
		lava.up=lava.orginup;		

		}		
			}
		

	
	
function getPosConf(){
var uy=Math.floor(ypos);
var ux=Math.floor(xpos);
var dy=Math.ceil(ypos);
var dx=Math.ceil(xpos);

var a2a2=(ux+1-xpos)*(uy+1-ypos);
var b2a2=(xpos+1-dx)*(uy+1-ypos);
var a2b2=(ux+1-xpos)*(ypos+1-dy);
var b2b2=(xpos+1-dx)*(ypos+1-dy);

if(Math.round(a2a2+b2a2+a2b2+b2b2)===4){
	a2a2=1/4;
	b2a2=1/4;
	a2b2=1/4;
	b2b2=1/4;
	}
else if(Math.round(a2a2+b2a2+a2b2+b2b2)===2){
	a2a2/=2;
	b2a2/=2;
	a2b2/=2;
	b2b2/=2;
	}

return [a2a2, a2b2, b2a2, b2b2, ux, uy, dx, dy]
}
	
	
	
			
