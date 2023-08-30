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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Class switching by clicking. Checked/deleted.
listContainer.addEventListener ("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle ("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false ); 

// local storage

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();