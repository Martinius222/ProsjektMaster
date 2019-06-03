/*document.getElementById("newCombBtn").addEventListener("click", function() {
	var hex = document.createElement("div");
	hex.classList.add("hexagon");
	document.getElementById("generatorField").appendChild(hex);
});*/

document.getElementById("newCombBtn").addEventListener("click", function() {

	var hex = document.createElement("div");
	hex.className = "hexagon";

	var like = document.createElement("button");
	like.innerHTML = "&#x2665";
	like.id = "likebtn";

	var del = document.createElement("button");
	del.innerHTML = "&#10799";
	del.id = "deletebtn";

	var inp = document.createElement("input");
	inp.className = "input";
	inp.placeholder = "Title";

	var com = document.createElement("button");
	com.innerHTML = "&#x2261";
	com.id = "comment";

	hex.appendChild(like);
	hex.appendChild(del);
	hex.appendChild(inp);
	hex.appendChild(com);
	document.getElementById("generatorField").appendChild(hex);
});