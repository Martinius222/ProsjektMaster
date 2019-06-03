/*document.getElementById("newCombBtn").addEventListener("click", function() {
	var hex = document.createElement("div");
	hex.classList.add("hexagon");
	document.getElementById("generatorField").appendChild(hex);
});*/

document.getElementById("newCombBtn").addEventListener("click", function() {

	var hex = document.createElement("div");
	hex.className = "hexagon";

	var like = document.createElement("button");
	like.innerHTML = "+";
	like.id = "likebtn";

	var del = document.createElement("button");
	del.innerHTML = "-";
	del.id = "deletebtn";

	var inp = document.createElement("input");
	inp.className = "input";
	inp.placeholder = "Title";

	hex.appendChild(like);
	hex.appendChild(del);
	hex.appendChild(inp);
	document.getElementById("generatorField").appendChild(hex);
});