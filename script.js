let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

window.onload = () => {
  loadTasks();
};

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="removeTask(this)">x</button>
  `;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("li").forEach(li => {
    tasks.push(li.innerText.replace("x", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="removeTask(this)">x</button>
    `;
    taskList.appendChild(li);
  });
}
