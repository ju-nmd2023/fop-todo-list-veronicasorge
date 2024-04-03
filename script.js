const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
  if (inputBox.value === "") {
    alert("Can't submit an empty task!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    li.addEventListener("click", function () {
      this.classList.toggle("checked");
      saveTasks();
    });

    const button = document.createElement("button");
    button.innerText = "✖︎";
    button.onclick = removeElement;
    button.setAttribute("class", "deletebutton");
    li.appendChild(button);

    taskList.appendChild(li);
    inputBox.value = "";
    saveTasks();
  }
}

//add task with enter key as well
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function saveTasks() {
  localStorage.setItem("myTasks", taskList.innerHTML);
}

function showTasks() {
  taskList.innerHTML = localStorage.getItem("myTasks");
}
showTasks();

function removeElement() {
  const element = this.parentNode;
  console.log(element);
  element.parentNode.removeChild(element);
}
