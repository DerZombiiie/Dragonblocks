var xpos=0;
	var ypos=0;	
	var xvelocity=0;
	var yvelocity=0;
	
	var gravity=9.81;
	var maxxvelocity=8;
	var acceleration=30;
	
	var bpoint=0.0011;
	
	
	function fall(c){
		if(b||c){
			
	c=false;		
	b=false;
	var posConfig=[	nodeLiquid[map[Math.ceil(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.ceil(xpos)][Math.floor(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.floor(ypos)]]	];
	if(posConfig.indexOf("lava")!=-1){
		console.log("Ouch!");
	 gravity=3;
	 maxxvelocity=2;
	 acceleration=1;
		
		}
	
	else if(posConfig.indexOf("water")!=-1){
	console.log("Splash!");	
	 gravity=-1;
	 maxxvelocity=5;
	 acceleration=7;
	 
		}
	
	else{
	 gravity=9.81;
	 maxxvelocity=8;
	 acceleration=20;
		}	
		
	var deep=Math.min(mapMeta[Math.floor(xpos)].indexOf("solid", ypos),mapMeta[Math.ceil(xpos)].indexOf("solid", ypos));
	if (deep===-1){
		deep=25
		}
	if ((ypos+1)<deep){
		
		yvelocity+=gravity/frequency;
		
		if((ypos+1+yvelocity)<deep){
		ypos+=yvelocity;
		setTimeout(fall, 1000/frequency,true);
		
		}
		else{
			
		 ypos=deep-1;
		 yvelocity=0;
		 b=true;
			
			}
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		
		}
		else{
		
		 ypos=deep-1;
		 yvelocity=0;
		 b=true;
		
			
		}
		}}
	var to="";	
	var a=true;
	var b=true;
	var c=false;
	var  d=true;
	function acc(evt){
	
		
		var posConfig=[	nodeLiquid[map[Math.ceil(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.ceil(xpos)][Math.floor(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.floor(ypos)]]	];
	
	if(posConfig.indexOf("lava")!=-1){
	 gravity=3;
	 maxxvelocity=2;
	 acceleration=1; 
	 bpoint=0.0001
		}
	if(posConfig.indexOf("water")!=-1){
	 gravity=1;
	 maxxvelocity=5;
	 acceleration=3;
	 bpoint=0.0005
		}	
	else{
	 gravity=9.81;
	 maxxvelocity=8;
	 acceleration=20;
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
	else{
		brake({key:"ArrowLeft"});
		}
	if(Math.abs(Math.round(xpos)-xpos)<bpoint){
			xpos=Math.round(xpos);
			}
	
		
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
	fall(false);
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
	
	else{
		brake({key:"ArrowRight"});
		}
		if(Math.abs(Math.round(xpos)-xpos)<bpoint){
			xpos=Math.round(xpos);
			}
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		fall(false);
to=setTimeout(acc, 1000/frequency, evt);		
			}
	//if(evt.key==="Space"){                  //code will be released in dragonblocks 3.0
		//evt.preventDefault();
		//yvelocity=10/frequency;
		//jump(d);
	//}
		}		
		
		function brake(evt)	{
			if(evt.key==="ArrowLeft"||evt.key==="ArrowRight"){
			a=false;
			fall(false);
			clearTimeout(to);
			if(Math.abs(Math.round(xpos)-xpos)<0.01){
			xpos=Math.round(xpos);
			}
			xvelocity=0;
			
		}
			}
			
	
	
	
	
	
			
	/*function jump(d){
	if(d||b){
	d=false;
	var posConfig=[	nodeLiquid[map[Math.ceil(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.ceil(xpos)][Math.floor(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.ceil(ypos)]],	nodeLiquid[map[Math.floor(xpos)][Math.floor(ypos)]]	];
	if(posConfig.indexOf("water")!=-1){
	 gravity=5;
	 maxxvelocity=5;
	 acceleration=3;
		}
	else if(posConfig.indexOf("lava")!=-1){
	 gravity=3;
	 maxxvelocity=2;
	 acceleration=1;
		}
	else{
	 gravity=9.81;
	 maxxvelocity=8;
	 acceleration=20;
		}	
		
	var high=Math.max(mapMeta[Math.floor(xpos)].indexOf("solid", ypos),mapMeta[Math.ceil(xpos)].indexOf("solid", ypos));
	if (high===-1){
		high=0
		}
		if((ypos+yvelocity)>high){
		ypos+=yvelocity;
		fall(false);
		setTimeout(jump, 1000/frequency,true);
		}
		else{
		 ypos=high;
		 yvelocity=0;
		 d=true;
			}
		player.style.top=ypos*30+"px";
		player.style.left=xpos*30+"px";
		
		}
		}	
			
*/ //code will be released in DrAgOnBlOcKs 3.0
