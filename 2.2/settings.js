var frequency=500;
var TexturePack="Minetest";
var bpoint=0.2;
document.getElementById("spielfeld").style.background="#08cfff";
document.getElementById("spielfeld").style.backgroundSize="cover";
document.getElementsByTagName('body')[0].style.background="url(TexturePacks/"+TexturePack+"/sky.png)";
document.getElementsByTagName('body')[0].style.backgroundSize="cover";
document.getElementsByTagName('body')[0].style.cursor="url(TexturePacks/" + TexturePack + "/cursor.png),auto";

var Mapgens=[];
var freezemapping=true;
var ExtraMaps=[];
var playerSkin="red";
var password="diggel";
var favoriteMap="seaMap";
var SimpleDigging=true;
var SimpleBuilding=true;
var moreblocks=true;
var moremoreblocks=true;
var gravity=9.81;
var maxxvelocity=1;
var acceleration=5;
	



setTimeout(starts,100);
function starts(){
	generateMap("default");
	spawn();
	
	}
