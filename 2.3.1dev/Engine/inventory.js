function selectNew(evt25){

	document.getElementById(selectItem+'OnBar').style.boxShadow="none";
	if(evt25.key==="n"&&NEvent){
	evt25.preventDefault();
	selectItem+=1;
	if(selectItem===hudbar.length){
		selectItem=0;
		}
	}
	if(evt25.key==="b"&&BEvent){
	evt25.preventDefault();
	selectItem-=1;
	if(selectItem===-1){
		selectItem=hudbar.length-1;
		}
	}
	if(evt25.key == 1 ||evt25.key == 2||evt25.key == 3||evt25.key == 4||evt25.key == 5||evt25.key == 6||evt25.key == 7||evt25.key == 8){
	evt25.preventDefault();
	selectItem=parseInt(evt25.key - 1);
		}
	document.getElementById(selectItem+'OnBar').style.boxShadow="0 0 0 5px #444444";
	}
var selectItem=0;

window.addEventListener("keydown", selectNew);
document.getElementById('ModExtras').innerHTML='<center><div id="itembar" style="position:fixed;bottom:5px;height:60px;background:darkgrey;border-style:solid;border-color:grey"></div></center>'+document.getElementById('ModExtras').innerHTML;
var itembar=document.getElementById('itembar');
var theWidth = (document.querySelector('html').clientWidth - 410)/2;
	if(theWidth<0){
		theWidth = 0
		}
	itembar.style.left = theWidth+"px";
	document.getElementsByTagName('body')[0].style.height = "900px";
function updateHudbar(){
	
	itembar.style.width=hudbar.length*50+10+"px";
	itembar.innerHTML = "";
for(i=0;i<hudbar.length;i++){
itembar.innerHTML = '<div id="'+i+'OnBar"style="width:40px;height:40px;position:absolute;top:10px;left:'+parseInt(i*50+10)+'px;background-image:'+hudbar[i].texture+';background-size:cover"></div>'+itembar.innerHTML; 
}

var inv_itembar = document.getElementById('inv-itembar');
if(inv_itembar){
	inv_itembar.style.width=hudbar.length*50+10+"px";
	inv_itembar.innerHTML = "";
for(i=0;i<hudbar.length;i++){
inv_itembar.innerHTML = '<div onclick="selected_invbar_item = '+i+';hudbar[selected_invbar_item]=air;updateHudbar();"id="'+i+'OnInvBar"style="border-style:solid;border-width:1px;cursor:pointer;width:40px;height:40px;position:absolute;top:10px;left:'+parseInt(i*50+10)+'px;background-image:'+hudbar[i].texture+';background-size:cover;"></div>'+inv_itembar.innerHTML; 
}
document.getElementById(selected_invbar_item+'OnInvBar').style.boxShadow="0 0 0 5px #444444";

}
document.getElementById(selectItem+'OnBar').style.boxShadow="0 0 0 5px #444444";
}
var inventory = false;
function toggleInventory(){
	inventory = !inventory;
	if(inventory){
		myWindow = openWindow();
		IEvent = true;
		myWindow.innerHTML += '<div id="inv-itembar" style="position:absolute;bottom:5px;height:60px;background:darkgrey;border-style:solid;border-color:grey"></div>';
		var inv_itembar=document.getElementById('inv-itembar');
		var theWidth = (850 - 410)/2;
		if(theWidth<0){
			theWidth = 0
			}
		inv_itembar.style.left = theWidth+"px";
		myWindow.innerHTML += "<div id='inv_allitems' style='position:absolute;top:50px;left:5px;width:840px;'></div>";
		myWindow.innerHTML += "<h2 style='font-family:fantasy'>INVENTORY</h2>";
		myWindow.innerHTML += "<div align='left'style='width:350px;visibility:hidden;border-width:1px;background-color:#156932;border-color:#35FF00;border-style:solid;position:absolute;' id='inv-hint'></div>";
		newWindow.addEventListener("mouseover",inv_hide_hint);
		var inv_allitems = document.getElementById('inv_allitems');
		for(i=0;i<blocks.length;i++){
			inv_allitems.innerHTML += '<div onclick="inv_click('+i+')"onmouseover="inv_over('+i+',event)"style="cursor:pointer;box-shadow:0 0 0 0px black inset;width:30px;height:30px;position:absolute;top:'+Math.floor(i/24)*35+'px;left:'+(i%24)*35+'px;background-image:'+blocks[i].texture+';background-size:cover"></div>'
		}
	
		updateHudbar();
		}
	else{
		closeWindow();
		}	
	}
	
	selected_invbar_item = 0;
window.addEventListener('keydown',function(event){
	if(event.key === "i"&&IEvent){
		event.preventDefault();
		toggleInventory();
		}
	})
function inv_over(i,event){
	var hint = document.getElementById('inv-hint');
	setTimeout(inv_show_hint,1);
	var item = blocks[i]
	hint.innerHTML = "&ensp;<b>"+item.inv.name+" ["+item.inv.mod+"]</b><br>&ensp;Itemstring: <font style='font-family:monospace;font-size:15px;'>"+item.name+"</font><br>&ensp;Hardness: <var>"+item.hardness+"</var><br>&ensp;Flags: ";
	if(item.groups.length === 0){
		hint.innerHTML += "<var>none</var><br><br>";
		}
	else{
		var thetext = "<br>";
		for(h=0;h<item.groups.length;h++){
			var thegroup = item.groups[h];
			var thecolor = "black";
			if(thegroup === "liquid"){
				thecolor = "blue";
				}
			if(thegroup === "gas"){
				thecolor = "grey";
				}	
			if(thegroup === "farm"){
				thecolor = "yellow";
				}
			if(thegroup === "dirt"){
				thecolor = "#6D2E00";
				}	
			if(thegroup === "unbreakable"){
				thecolor = "red";
				}	
			thetext += "&emsp;<span style='color:"+thecolor+";'>"+thegroup+"</span><br>";
			}
			thetext += "<br>";
			hint.innerHTML += thetext;
		}
	hint.style.left = event.pageX-parseInt(newWindow.style.left.replace(/px/,'')) + "px";	
	hint.style.top = event.pageY-parseInt(newWindow.style.top.replace(/px/,'')) + "px";		
	}
	function inv_click(i){
		if(hudbar[selected_invbar_item] === air){
			hudbar[selected_invbar_item] = blocks[i];
			updateHudbar();
			}
		}
function inv_hide_hint(){
	document.getElementById('inv-hint').style.visibility = "hidden";
	}
function inv_show_hint(){
	document.getElementById('inv-hint').style.visibility = "visible";
	}	
window.addEventListener("wheel",function(event){
	if(MouseWheelEvent){
	document.getElementById(selectItem+'OnBar').style.boxShadow="none";
	if(!(event.deltaY < 0)){
	event.preventDefault();
	selectItem+=1;
	if(selectItem===hudbar.length){
		selectItem=0;
		}
	}
	else{
	event.preventDefault();
	selectItem-=1;
	if(selectItem===-1){
		selectItem=hudbar.length-1;
		}
	}
	document.getElementById(selectItem+'OnBar').style.boxShadow="0 0 0 5px #444444";

		}
	})
