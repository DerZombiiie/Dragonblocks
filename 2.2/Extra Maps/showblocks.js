ExtraMaps.push("showMap");
function showMap(){
map=[

[air,air,air,air,air,air,air,bricks,bricks,planks,planks,planks,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,bricks,bricks,planks,planks,planks,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,bricks,bricks,planks,planks,planks,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,bricks,bricks,planks,planks,planks,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,bricks,bricks,planks,wood,wood,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,stone,soul_sand,stone,stone],
[air,air,air,air,air,air,air,air,bricks,bricks,planks,planks,dirt,dirt,dirt,dirt,dirt,stone,stone,stone,stone,air,soul_sand,soul_sand,stone],
[air,air,air,air,air,air,air,air,air,bricks,air,air,dirt,dirt,sand,sand,dirt,stone,stone,stone,air,air,soul_sand,soul_sand,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,dirt_grass,sand,sand,sand,sand,stone,stone,air,air,air,soul_sand,soul_sand,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,dirt_grass,sand,sand,sand,sand,stone,stone,air,air,air,soul_sand,stone,water],
[air,air,air,air,air,air,air,air,air,air,air,air,sand,sand,sand,sand,dirt,stone,air,air,water,water,water,water,water],
[air,air,air,air,air,air,air,air,air,air,air,air,sand,sand,sand,sand,dirt,stone,air,water,water,water,water,water,water],
[air,air,air,air,air,air,air,air,air,air,air,air,sand,sand,sand,dirt,dirt,stone,water,water,water,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,sand,sand,dirt,dirt,dirt,water,water,water,stone,stone,stone,lava,stone],
[air,air,air,air,air,air,air,air,air,air,air,pumpkin,dirt,dirt,dirt,dirt,water,water,water,stone,stone,stone,lava,lava,lava],
[air,air,air,air,air,air,air,air,air,air,air,pumpkin,dirt,dirt,dirt,dirt,water,water,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,leaves,leaves,leaves,air,air,dirt,dirt,dirt,water,water,water,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,leaves,leaves,leaves,wood,wood,dirt_grass,dirt,dirt,water,water,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,leaves,leaves,leaves,air,air,dirt,dirt,water,water,water,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,leaves,leaves,leaves,wood,wood,dirt_grass,water,water,water,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,leaves,leaves,leaves,air,air,water,water,water,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,water,water,dirt_grass,dirt,dirt,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,water,water,dirt_grass,dark_prismarin,prismarin,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,water,wet_sponge,dark_prismarin,prismarin,prismarin,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,water,dark_prismarin,prismarin,prismarin,prismarin,stone,stone,stone,stone,stone,stone,stone,stone],
[air,air,air,air,air,air,air,air,air,air,air,air,dark_prismarin,dark_prismarin,prismarin,prismarin,prismarin,stone,stone,stone,stone,stone,stone,stone,stone]]

for(x=0;x<25;x++){
	for(y=0;y<25;y++){
		Act(x,y)
		}
	}
	return "allowed"
}
