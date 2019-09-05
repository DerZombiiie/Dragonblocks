document.getElementById('options-content').innerHTML+='<button onclick="freezeMap()">Print Map Code [Firefox Only]</button><br><br>';
function freezeMap(){
	var mapname=window.prompt("Choose a name for the Map");
	if(mapname){
	var htmltext="function "+mapname+"Map(){<br>map=<br>"+mapString.toSource().replace(/"/g,' ').replace(/\ /g,'')+";<br>}<br>ExtraMaps.push('"+mapname+"Map');<br>//This Code was created by Fleckenstein's freezemapping mod for Firefox.";
	document.write(htmltext);
	document.getElementsByTagName('html')[0].style.fontFamily = "monospace";
	document.getElementsByTagName('html')[0].style.fontSize = "15px";
		}
	}
