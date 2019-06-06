

// Variable for use with status toggle
var statusElement = document.getElementById("visibilityopt");

statusElement.onclick = function () {
    if (statusElement.innerText !== "PUBLIC") {
        statusElement.innerText = "PUBLIC";
    } else {
        statusElement.innerText = "PRIVATE";
    }
};


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btns = document.getElementsByClassName("comment");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Delete button functionality

var removeHex = document.getElementsByClassName("hexagon");
var delbtn = document.getElementsByClassName("deletebtn");

for (var i = 0; i < delbtn.length; i++) {
  	delbtn[i].onclick = function() {
  		for(var n = 0; n < removeHex.length; n++) {
  			if (delbtn[i] == removeHex[n]) {
  				removeHex.remove();
  			}
  		}
    }
}



// JavaScript for generating new combs with nested elements

function generateNewComb(backgroundColor) {

	var hex = document.createElement("div");
	hex.className = "hexagon";

	var like = document.createElement("button");
	like.innerHTML = "&#x2665";
	like.id = "likebtn";

	var del = document.createElement("button");
	del.innerHTML = "&#10799";
	del.className = "deletebtn";

	var inp = document.createElement("input");
	inp.className = "input";
	inp.placeholder = "New Great Idea";

	var com = document.createElement("button");
	com.innerHTML = "&#x2261";
	com.className = "comment";

	hex.appendChild(like);
	hex.appendChild(del);
	hex.appendChild(inp);
	hex.appendChild(com);
	document.getElementById("generatorField").appendChild(hex);

	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btns = document.getElementsByClassName("comment");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	for (var i = 0; i < btns.length; i++) {
  		btns[i].onclick = function() {
    		modal.style.display = "block";
  		}
	}

}


document.getElementById("newCombBtn").addEventListener("click", function() {

	generateNewComb();

});

// Variables for use with KanBan elements
var sidebar = document.getElementById("sidebar");
var activeUsersText = document.getElementById("active-users-text");
var options = document.getElementById("options");
var listField = document.getElementById("listField");
var kanbanContainers = document.getElementsByClassName("kanban-container");
var size = document.getElementById("size");
var newCombText = document.getElementById("new-comb-text");
var generator = document.getElementById("generator");
var workspace = document.getElementById("workspace");

// Workaround to get if-check working
sidebar.style.width = "17%";

// Toggle KanBan page
size.addEventListener("click", function() {
	if(sidebar.style.width == "17%"){
		sidebar.style.width = "100%";
		listField.style.height = "95%";
		size.style.top = "0%";

		for(var i = 0; i < kanbanContainers.length; i++){
			kanbanContainers[i].style.display = "inline-block";
		}

		activeUsersText.style.display = "none";
		options.style.display = "none";
		newCombText.style.display = "none";
		generator.style.display = "none";
		workspace.style.display = "none";
	}
	else {
		sidebar.style.width = "17%";
		listField.style.height = "29em";
		size.style.top = "96.2%";

		for(var i = 0; i < kanbanContainers.length; i++){
			kanbanContainers[i].style.display = "none";
		}

		activeUsersText.style.display = "initial";
		options.style.display = "block";
		newCombText.style.display = "initial";
		generator.style.display = "flex";
		workspace.style.display = "inline-block";
	}
});