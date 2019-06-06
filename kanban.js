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
var ideas = document.getElementById("ideas");

// Workaround to get if-check working
sidebar.style.width = "17%";

// Toggle KanBan page
size.addEventListener("click", function() {
	if(sidebar.style.width == "17%"){
		sidebar.style.width = "52%";
		sidebar.style.display = "flex";
		sidebar.style.flexDirection = "row";
		sidebar.style.justifyContent = "center";
		sidebar.style.alignItems = "center";
		listField.style.height = "95%";
		listField.style.width = "30%";
		listField.style.margin = "0.5em 0.5em";
		listField.style.borderRadius = "1em";
		size.style.top = "0%";

		for(var i = 0; i < kanbanContainers.length; i++){
			kanbanContainers[i].style.display = "inline-block";
		}

		ideas.style.display = "none";
		activeUsersText.style.display = "none";
		options.style.display = "none";
		newCombText.style.display = "none";
		generator.style.display = "none";
		//workspace.style.display = "none";
	}
	else {
		sidebar.style.width = "17%";
		sidebar.style.display = "initial";
		listField.style.width = "95%";
		listField.style.height = "29em";
		listField.style.margin = "0.2em auto";
		listField.style.borderRadius = "8px";
		size.style.top = "96.2%";

		for(var i = 0; i < kanbanContainers.length; i++){
			kanbanContainers[i].style.display = "none";
		}

		ideas.style.display = "initial";
		activeUsersText.style.display = "initial";
		options.style.display = "block";
		newCombText.style.display = "initial";
		generator.style.display = "flex";
		workspace.style.display = "inline-block";
	}
});