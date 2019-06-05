

// Variable for use with status toggle
var statusElement = document.getElementById("visibilityopt");

statusElement.onclick = function () {
    if (statusElement.innerText !== "Public") {
        statusElement.innerText = "Public";
    } else {
        statusElement.innerText = "Private";
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

