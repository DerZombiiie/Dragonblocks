
function simpledig(event){
	if(event.which === 1){
	var cLeft=Math.floor(parseInt(event.pageX-parseInt(spielfeld.style.left))/30);
	var cTop=Math.floor(parseInt(event.pageY-parseInt(spielfeld.style.top))/30);
	Act(cLeft,cTop);
	if(map[cLeft][cTop].buildStability===true&&(map[cLeft][cTop].groups.indexOf("unbreakable") === -1||creativemode)){			
	hard=map[cLeft][cTop].hardness+1;
	if (creativemode){
		hard = 2;
		}
	orghard = hard - 1;
	document.getElementById('crack').style.visibility="visible";
	document.getElementById('crack').style.left=cLeft*30+"px";
	document.getElementById('crack').style.top=cTop*30+"px";
	sddig(cLeft,cTop);
	sdField.addEventListener("mouseup",function(){if(sdTo){clearTimeout(sdTo);}mark=true;document.getElementById('crack').style.visibility="hidden";});
	}}}
function sddig(L,T){
	hard-=1;
	document.getElementById('crack').style.backgroundImage="url(Mods/"+texturemod+"/textures/crack"+Math.floor((orghard-hard)/(orghard/4))+".png)";
	
	if(hard===0){
		map[L][T]=air;
		Act(L,T);
		document.getElementById('crack').style.visibility="hidden";				
		}
	else{
	sdTo=setTimeout(sddig, 250, L, T);	
		}	
	}	 


function SimpleDigging_toggleMode(){
	creativemode = !creativemode;
	if(creativemode){
			document.getElementById('togglemodebutton').innerHTML = "Set Gamemode to Survival";
			}
	else{
			document.getElementById('togglemodebutton').innerHTML = "Set Gamemode to Creative";

			}	
		}
var orghard = 0;			
var hard=0;	
var sdTo=null;
var sdField=document.getElementById('spielfeld');
sdField.addEventListener("mousedown", simpledig);
document.getElementById('options-content').innerHTML+='<button onclick="SimpleDigging_toggleMode()" id="togglemodebutton">Set Gamemode to Creative</button><br><br>';
sdField.innerHTML += '<div id="crack" style="position:absolute;visibility:hidden;background-size:cover;height:30px;width:30px;"></div>';

