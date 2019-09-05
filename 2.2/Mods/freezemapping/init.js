if(freezemapping){
document.getElementById('options-content').innerHTML+='<br><button onclick="freezeMap()">FreezeMap</button>';
function freezeMap(){
	var mapname=window.prompt("Choose a name for the Map");
	var htmltext="function "+mapname+"(){<br>map=<br>"+mapString.toSource().replace(/"/g,' ').replace(/\ /g,'')+";  <br>for(x=0;x<25;x++){<br>for(y=0;y<25;y++){<br>Act(x,y)<br>}<br>}<br> return 'allowed'<br>}<br>ExtraMaps.push('"+mapname+"');";
	document.write(htmltext);
	}

}
