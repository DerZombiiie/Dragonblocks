
<!DOCTYPE php>
<html>
<head>
	<title>DRAGONBLOCKS</title>
	<meta charset="utf-8">
	<style>
		html{height:1600px}
		body{background-image:url(Menu/background.jpg);background-size:cover;background-attachment:fixed}
		#thecredits{position:absolute;background-color:skyblue;right:20px;width:400px;top:140px}
		#news{position:absolute;background-color:green;left:500px;width:400px}
		#play{position:absolute;background-color:yellow;left:20px;width:400px;top:300px;}
		#definition{background-color:red;position:absolute;left:550px;top:400px;width:600px}
		#commands{background-color:black;color:white;position:absolute;left:450px;top:550px;width:650px}
		#mods{background-color:pink;position:absolute;left:50px;top:420px;width:300px}
		#editions{background-color:blue;position:absolute;right:10px;top:1050px;width:500px}
		#mapgens{background-color:lightgreen;position:absolute;left:20px;top:770px;width:400px}
		#extramaps{background-color:brown;position:absolute;left:500px;top:1100px;width:400px}

		#logo{position:absolute;width:350px;top:-30px;left:50px}
		div{opacity:0.8}
		*{opacity:1}
		#dzlogo{position:absolute;top:5px;left:10px;}
	#creditsdz{position:fixed;right:5px;background-color:#704030;top:60px;height:50px;width:340px}
#dzstudios{font-family:'Metal Mania';position:relative;top:4px;left:55px;color:#00ff00;width:200px;height:28px;font-size:35px}
#eligameslogo{position:absolute;top:5px;left:230px}
 #fleckensteinlogo{position:absolute;top:-25px;left:-25px}
 #fleckensteinproductions{font-family:'Ani';position:relative;top:10px;left:50px;color:white;width:200px;height:28px;}
  #credits{position:fixed;right:5px;background-color:black;top:5px;height:50px;width:340px}
.cmd{font-family:mono}
.td1{width:315px;}
td,th{border: 1px solid}
table{display:inline}
	</style>
	<link rel="icon" href="Menu/logo.png">	
	<script>
	function play(){
		window.location.href=document.getElementById('version').value+"/index.html";
		}
	</script>
</head>
<body>
	<img src="Menu/logo.png" id="logo">
	<h1 align="center"style="color:#4b1019;font-family:Ubuntu;font-size:60px">Dragonblocks</h1>
	<div id="thecredits">
		<center>
	<h3>CREDITS</h3>
		<h4>Main Development(Engine)</h4>
			<ul>
				<li>EliasFleckenstein</li>
			</ul>
		<h4>Development(Game & Mods)</h4>
			<ul>
				<li>EliasFleckenstein</li>
				<li>DerZombiiie</li>
			</ul>
		<h4>Online Work</h4>
			<ul>
				<li>HimbeerServer</li>
				<li>DerZombiiie</li>
			</ul>
		<h4>Thanks to the Elidragon Team</h4>
			<ul>
				<li>EliasFleckenstein</li>
				<li>DerZombiiie</li>
				<li>TheodorSmall</li>
				<li>HimbeerServer</li>
				<li>SC</li>
				
			</ul>
			<h4>Our HTML/Javascript Teachers</h4>
			<ul>
			<li>db5fx</li>
			<li>ablion</li>
			<li>quizdidaktik</li>
			<li>selfhtml</li>
			</ul>
			</center>
	</div>	
	<div id="news">
		
		<h3>&emsp;What's new in Dragonblocks 3.0?</h3>
	
		<ul>
		<li>Many Options Aviable</li>
		<li>Dozents of bUG fixes</li>
		<li>Complete Engine Updade</li>
		<li>New Map Generators: v3 and v3++</li>
		<li>Player looks much more Realistic</li>
		<li>Fixing of Physically Mistakes</li>
		<li>Map autofits your into Screen</li>

		</ul>
		
	</div>
	<div id="play">
		<center>
	<h3>Play Dragonblocks</h3>
	Version:<select id="version">
	<option>2.2</option>
	<option>2.1</option>
	<option>2.0</option>
	<option>1.0</option>
	</select>
	&emsp;
	<button onclick="play()">Play</button>
	<br><br>
	</center>
	</div>
	<div id="definition">

		<h3>&emsp;What is Dragonblocks?</h3>
		
		<ul>
		<li>Dragonblocks is a 2D Blockgame</li>	
		<li>Inspired by Games like minetest or Minecraft</li>

		</ul>
	
	</div>
	<div id="commands">
	
		<h3>&emsp;Commands</h3>
		<h4>&emsp;2.0</h4>
			<table>
			<tr>	<td class="td1"  class="cmd">skin	</td>	<td class="td1" >	to set your Skin	</td>	</tr>
			<tr>	<td class="td1"  class="cmd">	spawn	</td>	<td class="td1" >	to Respawn			</td>	</tr>
			<tr>	<td class="td1"  class="cmd"> mapping1	</td>	<td class="td1" >	to Load Extra Map 1	</td>	</tr>
			</table>
			
			
		<h4>&emsp;2.1</h4>
		<table>
			<tr>	<td class="td1"  class="cmd">skin("&lt;skin&gt;")</td>	<td class="td1" >to set your Skin</td>	</tr>
			<tr>	<td class="td1"  class="cmd">spawn()</span>		</td>	<td class="td1" >	to Respawn			</td>	</tr>
			<tr>	<td class="td1"  class="cmd">setMap("&lt;extramap&gt;")</span>	</td>	<td class="td1" >	to Load Extra Map	</td>	</tr>
			<tr>	<td class="td1"  class="cmd">changeMap(&lt;x&gt;,&lt;y&gt;,"&lt;block&gt;")</span>	</td>	<td class="td1" >	to Change the Block at x|y to &lt;block&gt;</td>	</tr>
			<tr>	<td class="td1"  class="cmd">teleport(&lt;x&gt;,&lt;y&gt;)</span>	</td>	<td class="td1" >	to Teleport you to x|y</td>	</tr>
			<tr>	<td class="td1"  class="cmd">su</span>	</td>	<td class="td1" >	to use Console as JavaScript Console (password required)</td>	</tr>
			<tr>	<td class="td1"  class="cmd">generateMap("&lt;mapgen&gt;")</span>	</td>	<td class="td1" >to generate Map of the Kind &lt;mapgen&gt;</td>	</tr>

			</table>

<br><br>
	
	</div>
		<div id="mods">
	
		<h3>&emsp;Mods</h3>
		<h4>&emsp;2.1</h4>
		<ul>
		<li>Simple Digging (ef)</li>
		</ul>
		<h4>&emsp;2.2</h4>
		<ul>
		<li>Simple Digging (ef)</li>
		<li>Simple Building (ef)</li>
		<li>freezeMapping (ef)</li>
		<li>moreblocks (dz)</li>
		</ul>
		<br>
		<small>[ef=developed by EliasFleckenstein]<br>[dz=developed by DerZombiiie]</small>
	</div>
	<div id="editions">
	<h3>&ensp;Editions</h3>
		<table>
			<tr><th>Number</th><th>Edition Name</th><th>Game</th><th>Engine</th><th>Release</th></tr>
			<tr><td>1.0</td><td>Pancake</td><td>Jumping</td><td>Animation</td><td>03.01.2019</td></tr>
			<tr><td>2.0</td><td>Trance</td><td>Gravity</td><td>Gravity1</td><td>03.03.2019</td></tr>
			<tr><td>2.1</td><td>River</td><td>Dragonblocks</td><td>Gravity1</td><td>06.04.2019</td></tr>
			<tr><td>2.2</td><td>Star</td><td>Dragonblocks</td><td>Gravity2</td><td>14.05.2019</td></tr>
			<tr><td>3.0</td><td>Mithril</td><td>Dragonblocks</td><td>Gravity3</td><td>-unreleased-</td></tr>

		</table>
	</div>
	<div id="mapgens">
	
		<h3>&emsp;Map Generators</h3>
		<h4>&emsp;2.1</h4>
		<ul>
		<li>default</li>
		<li>lake</li>
		<li>flat</li>
		</ul>
		<h4>&emsp;2.2</h4>
		<ul>
		<li>default</li>
		<li>lake</li>
		<li>Cave</li>
		<li>flat</li>
		</ul>
		<h4>&emsp;3.0</h4>
		<ul>
		<li>v3++</li>
		<li>v3</li>
		<li>v2</li>
		<li>v1</li>
		<li>v0</li>
		</ul>
	</div>
	
	<div id="extramaps">
	
		<h3>&emsp;Extra Maps</h3>
		<h4>&emsp;2.0</h4>
		<ul>
		<li>map1(dungeonMap in later Versions)</li>
		</ul>
		<h4>&emsp;2.1</h4>
		<ul>
		<li>seaMap</li>
		<li>dungeonMap</li>
		</ul>
		<h4>&emsp;2.2</h4>
		<ul>
		<li>chaosMap</li>
		<li>spookyMap</li>
		<li>houseMap</li>
		<li>showMap</li>
		<li>seaMap</li>
		<li>dungeonMap</li>
		</ul>
	</div>
	
	<div id="credits">
	<span id="fleckensteinproductions">Fleckenstein Productions</span>
	<img id="fleckensteinlogo"src="Menu/Fleckenstein.gif"  width="100">
	<img id="eligameslogo"  src="Menu/EliGames.gif" width="100" >
	</div>
	
	<div id="creditsdz">
  <span id="dzstudios">DZ Studios</span>
	<img id="dzlogo"src="Menu/dzblock.png" width="40">
	</div>
</body>
</html>
