function Generate(){
	for(i=0;i<elements.length;i++){
		document.getElementById(elements[i]).style.visibility = "visible";
		}
	document.getElementById('logo').style.display = "none";	
	var theWidth = (document.querySelector('html').clientWidth - 750)/2;
	if(theWidth<0){
		theWidth = 0
		}
	document.getElementById('spielfeld').style.left = theWidth+"px";
	document.getElementById('layer').style.width = document.querySelector('html').clientWidth + "px";
	document.getElementById('layer').style.height = document.querySelector('html').clientHeight + "px";
	
	var theWidth = (document.querySelector('html').clientWidth - 600)/2;
	if(theWidth<0){
		theWidth = 0
		}
	document.getElementById('Options').style.left = theWidth+"px";
	
	var theWidth = (document.querySelector('html').clientWidth - 850)/2;
	if(theWidth<0){
		theWidth = 0
		}
	newWindow.style.left = theWidth+"px";
	
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
	source.style.borderColor="black";
	//source.style.borderStyle="solid";
	}
	}
}
function Act(x,y){
	source=document.getElementsByName('zeile'+y)[x];
	if(map[x][y].groups.indexOf("dirt")!=-1&&mapMeta[x].lastIndexOf(true, y-1)===-1){
		map[x][y]=dirt_grass;
		}
	else if(map[x][y].groups.indexOf("dirt")!=-1){
	map[x][y]=dirt;
		}	
	source.style.background=map[x][y].texture;
	source.style.backgroundSize="cover";
	mapMeta[x][y]=map[x][y].mobStability;
	mapString[x][y]=map[x][y].name;
	mapVertical[y][x]=map[x][y];
	mapStringVertical[y][x]=map[x][y].name;
	mapMetaVertical[y][x]=mapVertical[y][x].mobStability;
	if(map[x][y].groups.indexOf("farm")!=-1){
	farmTimer[x][y]=setTimeout(grow , map[x][y].growtime, x, y);
		}
				}


