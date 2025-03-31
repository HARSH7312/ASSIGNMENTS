function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete task on double click
    li.addEventListener("dblclick", function () {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}
