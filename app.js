const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === "") {
        alert("Nothing to add");
    }
    else{
        // adding new element from input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // adding cross symbol at the end of a row
        let span = document.creatElement("span");
        span.innerHTML = "/u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}