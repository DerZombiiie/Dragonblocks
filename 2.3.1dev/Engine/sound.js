class sound{
	constructor(filepath){
	document.getElementsByTagName('ModExtras').innerHTML += "<audio style='vsibility:hidden' id='sound"+filepath+"'  src='"+filepath+"'></audio>";
	this.filepath = filepath;
	}
	playSound(){
		var src = document.getElementById('sound'+this.filepath);
		if(src){
			src.play();
			}
		}
}

