let tasks = [];
let idNum = 1;

let form = document.getElementById("taskForm");
let taskManager = document.getElementById("taskmanager");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("taskName").value;
    if (name == "") {
        alert("Enter a task name");
        return;
    }

    let dateStr = "Added: " + new Date().toLocaleString();

    let task = {
        id: idNum,
        name: name,
        priority: document.getElementById("taskPriority").value,
        isImportant: document.getElementById("taskImportant").checked,
        isCompleted: document.getElementById("taskCompleted").checked,
        date: dateStr
    };

    idNum = idNum + 1;
    tasks[tasks.length] = task;

    console.log(JSON.stringify(tasks));

    showTasks();
});

function deleteTask(id) {
    let newTasks = [];
    let i = 0;
    let j = 0;
    while (i < tasks.length) {
        if (tasks[i].id != id) {
            newTasks[j] = tasks[i];
            j = j + 1;
        }
        i = i + 1;
    }
    tasks = newTasks;
    console.log(JSON.stringify(tasks));
    showTasks();
}

function toggleComplete(id) {
    let i = 0;
    while (i < tasks.length) {
        if (tasks[i].id == id) {
            tasks[i].isCompleted = !tasks[i].isCompleted;
        }
        i = i + 1;
    }
    console.log(JSON.stringify(tasks));
    showTasks();
}

function showTasks() {
    taskManager.innerHTML = "";

    let i = 0;
    while (i < tasks.length) {
        let div = document.createElement("div");

        if (tasks[i].isImportant) {
            div.style.color = "red";
        }
        if (tasks[i].isCompleted) {
            div.style.textDecoration = "line-through";
        }

        div.innerHTML =
            tasks[i].name + " (" + tasks[i].priority + ")<br>" +
            tasks[i].date + "<br>" +
            "<input type='checkbox' " + (tasks[i].isCompleted ? "checked" : "") +
            " onclick='toggleComplete(" + tasks[i].id + ")'> Completed" +
            "<button onclick='deleteTask(" + tasks[i].id + ")'>Delete</button>";

        taskManager.appendChild(div);
        i = i + 1;
    }
}
