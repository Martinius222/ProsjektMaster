document.getElementById("newCombBtn").addEventListener("click", function() {
	var btn = document.createElement("div");
	btn.classList.add("hexagon");
	document.getElementById("generatorField").appendChild(btn);
});