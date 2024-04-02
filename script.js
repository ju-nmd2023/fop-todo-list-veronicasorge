const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
  if (inputBox.value === "") {
    alert("Write something here!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    li.addEventListener("click", function () {
      this.classList.toggle("checked");
    });
    taskList.appendChild(li);
    inputBox.value = "";
  }
}
