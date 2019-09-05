document.getElementById('options-content').innerHTML+='<button onclick="worldedit()">JS Worldedit</button><br><br>';
function worldedit(){
	var myWindow = openWindow();
	denyKeyEvents();
	myWindow.innerHTML += "<h2>Enter Javascript Worldedit Code.</h2>";
	myWindow.innerHTML += "<textarea id='editcode' style='width:600px;height:300px;font-family:monospace;border-color:grey;border-style:outset;background-color:#ffffaa;font-size:15px'></textarea>";
	myWindow.innerHTML += "<br><br><button onclick='worldeditGo();'>GO</button>";
	myWindow.innerHTML += "<br><button onclick='allowKeyEvents();closeWindow();'>Cancel</button>";
	
	myWindow.innerHTML += "<button style='position:absolute;left:10px;top:75px;width:50px;background:blue;border-color:blue' onclick='worldedit_addIf()'>IF</button>";
	myWindow.innerHTML += "<button style='position:absolute;left:10px;top:125px;width:110px;background:orange;border-color:orange' onclick='worldedit_addElseIf()'>ELSE IF</button>";
	myWindow.innerHTML += "<button style='position:absolute;left:10px;top:175px;width:75px;background:yellow;border-color:yellow' onclick='worldedit_addElse()'>ELSE</button>";

	document.getElementById('editcode').value = lastcode;
	}
var lastcode = "";	
function worldeditGo(){
	var myCode = document.getElementById('editcode').value;
	lastcode = myCode;
	closeWindow();
	var blockchange = 0;
	for(x=0;x<25;x++){
		for(y=0;y<25;y++){
			var node = null;
			var oldnode = map[x][y];
			eval(myCode);
			if(node){
				map[x][y] = node;
				blockchange++;
				}

			}
		}
	updateAll();
	myWindow = openWindow();
	myWindow.innerHTML += "<br><span style='font-family:monospace;font-size:20px;'>Done.<br>Updated "+blockchange+" Blocks.</span";
	}
function worldedit_addIf(){
	document.getElementById('editcode').value += "\nif(){\n\t\n\t}";
	}
function worldedit_addElse(){
	document.getElementById('editcode').value += "\nelse{\n\t\n\t}";
	}
function worldedit_addElseIf(){
	document.getElementById('editcode').value += "\nelse if(){\n\t\n\t}";
	}
