const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

let myTasks = []; //create an array to store tasks

//load local storage content into the array
window.addEventListener("load", function loadTasks() {
  let storedData = localStorage.getItem("myTasks");
  if (storedData) {
    myTasks = JSON.parse(storedData);
  }
  renderTasks();
});

function addTask() {
  const taskText = inputBox.value.trim();

  //check if the input is not empty, then add task to the array
  if (taskText !== "") {
    myTasks.push({ text: taskText, checked: false });
    renderTasks();
    saveTasks();
  } else {
    alert("Can't submit an empty task!");
  }
  //clear the input box after adding task
  inputBox.value = "";
}

function renderTasks() {
  taskList.innerHTML = "";

  myTasks.forEach(function (task, index) {
    let newTask = document.createElement("li");
    newTask.textContent = task.text;

    if (task.checked) {
      newTask.classList.add("checked");
    }

    newTask.addEventListener("click", function check() {
      task.checked = !task.checked;
      this.classList.toggle("checked");
      saveTasks();
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "✖︎";
    removeButton.onclick = function () {
      removeTask(index);
    };
    removeButton.setAttribute("class", "deletebutton");

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
  });
}

//add task with enter key as well
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function removeTask(index) {
  myTasks.splice(index, 1);
  renderTasks();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(myTasks));
}
