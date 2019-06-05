// Variable for use with status toggle
var statusElement = document.getElementById("status");

statusElement.onclick = function () {
    if (statusElement.innerText !== "Public") {
        statusElement.innerText = "Public";
    } else {
        statusElement.innerText = "Private";
    }
};

// Variables for use with kanban toggle
var sizeElement = document.getElementById("size");
var combareaElement = document.getElementById("combarea");
var sidebarElement = document.getElementById("sidebar");
var todoElement = document.getElementById("todo-container");
var doingElement = document.getElementById("doing-container");
var doneElement = document.getElementById("done-container");
var kanbanContainerElements = document.getElementsByClassName("kanban-container");
var tableElement = document.getElementById("table");

// (Temporary?) Workaround to get the if check working
combareaElement.style.width = "80%";
sidebarElement.style.width = "20%";

sizeElement.onclick = function () {
    if(combareaElement.style.width == "80%" && sidebarElement.style.width == "20%"){
        combareaElement.style.width = "0%";
        sidebarElement.style.width = "100%";
        sidebarElement.style.flexFlow = "row";
        sizeElement.style.width = "100%";

        for(var i = 0; i < kanbanContainerElements.length; i++){
            kanbanContainerElements[i].style.margin = "2em 1em";
        }

        tableElement.style.display = "none";
        todoElement.style.width = "33.3%";
        doingElement.style.display = "inline-block";
        doneElement.style.display = "inline-block";
    } else {
        combareaElement.style.width = "80%";
        sidebarElement.style.width = "20%";
        sidebarElement.style.flexFlow = "column";
        sizeElement.style.width = "20%";

        for(var i = 0; i < kanbanContainerElements.length; i++){
            kanbanContainerElements[i].style.margin = "0.3em auto";
        }

        tableElement.style.display = "flex";
        todoElement.style.width = "80%";
        doingElement.style.display = "none";
        doneElement.style.display = "none";
    }
}