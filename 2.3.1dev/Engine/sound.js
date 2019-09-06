class sound{
	constructor(filepath){
	document.getElementsByTagName('body').innerHTML += "<audio style='vsibility:hidden' id='sound"+filepath+"'  src='"+filepath+"'></audio>";
	this.filepath = filepath;
	}
	play(){
		var src = document.getElementById('sound'+this.filepath);
		if(src){
			src.play();
			}
		}
}

