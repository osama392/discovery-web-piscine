const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateCounter() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    
    const li = document.createElement("li");
    li.textContent = text;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    
    li.appendChild(deleteButton);

    
    taskList.appendChild(li);

    
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        updateCounter();
    });

    
    taskInput.value = "";
    taskInput.focus();

    updateCounter();
}addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
