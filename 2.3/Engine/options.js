window.addEventListener("keydown",function(event){if(event.key==="Escape"&&EscapeEvent){toggleOptions();}});

function save(){
document.cookie="map="+mapString.toSource().replace(/"/g,' ').replace(/\ /g,'');
toggleOptions();
}
function mapPlus(){
	var myWindow = openWindow();
	myWindow.innerHTML += "<h1>New World</h1>";
	myWindow.innerHTML += "<button  style='font-size:20px;'onclick='mapPlusGen()'>Generate Map</button><br><br>";
	myWindow.innerHTML += "<button  style='font-size:20px;'onclick='mapPlusLoad()'>Load Extra Map</button><br>"
	}
function mapPlusGen(){
	var myWindow = openWindow();
	myWindow.innerHTML += "<h1>Map Generator</h1>"
	myWindow.innerHTML += "<select  style='font-size:20px;'id='selectMapgen' ></select>";
	for(i=0;i<Mapgens.length;i++){
		document.getElementById('selectMapgen').innerHTML += "<option>"+Mapgens[i]+"</option>";
		}
	myWindow.innerHTML += "&ensp;<button  style='font-size:20px;width:400px' onclick='generateSelectedMap();'>OK</button><br><br>"
	myWindow.innerHTML += "<button  style='font-size:20px;' onclick='closeWindow();randomMapGenerator();spawn();'>Random Map Generator</button>"
	}
function generateSelectedMap(){
	eval(document.getElementById('selectMapgen').value+"MapGenerator();");
	spawn();
	closeWindow();	
	}
function mapPlusLoad(){
	var myWindow = openWindow();
	myWindow.innerHTML += "<h1>Extra Map</h1>";
	myWindow.innerHTML += "<select  style='font-size:20px;'id='selectExtramap' ></select>";
	for(i=0;i<ExtraMaps.length;i++){
		document.getElementById('selectExtramap').innerHTML += "<option>"+ExtraMaps[i]+"</option>";
		}
	myWindow.innerHTML += "&ensp;<button  style='font-size:20px;' onclick='setSelectedMap();'>OK</button>";
	}	
function setSelectedMap(){
	eval(document.getElementById('selectExtramap').value+"();");
	updateAll();
	spawn();
	closeWindow();
	}
function SelectSkin(){
	var myWindow = openWindow();
	myWindow.innerHTML += "<h1 style='font-family:fantasy'>SKINS</h1>";
	myWindow.innerHTML += "<div id='ava_skins' style='position:absolute;left:25px;width:800px;top:70px;'></div>";
	var avaSkins = document.getElementById('ava_skins');
	for(i=0;i<skinlist.length;i++){
			avaSkins.innerHTML += '<div onclick="skin(skinlist['+i+'])" style="font-family:fantasy;color:white;cursor:pointer;width:60px;height:60px;position:absolute;top:'+Math.floor(i/12)*65+'px;left:'+(i%12)*65+'px;background:'+skins[skinlist[i]]+';background-size:cover"><span style="bottom:0px;position:absolute;left:5px;">'+skinlist[i]+'</span></div>'
		}
	}
function toggleOptions(){
		if(document.getElementById('Options').style.visibility === "hidden"){
			closeWindow();
			denyKeyEvents();
			EscapeEvent = true;
			document.getElementById('Options').style.visibility = "visible";
			optionsOn = true;
			}
		else{
			allowKeyEvents();
			document.getElementById('Options').style.visibility = "hidden";
			optionsOn = false;
			}
		toggleLayer();		
	}	
	var optionsOn = false;
function doMyTeleport(){
	var work = teleport(document.getElementById('teleX').value,document.getElementById('teleY').value);
	if(!work){
		closeWindow();
		myWindow = openWindow();
		myWindow.innerHTML += "<br><br><br><h4>Invalid Coordinates.<h4>";
		}
	else{
		closeWindow();
		}	
	}
