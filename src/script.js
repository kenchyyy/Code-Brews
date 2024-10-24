//  global scope array
let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
     localStorage
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const renderTasks = () => {
      const taskList = document.getElementById("task-list");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "flex items-center justify-between p-2 mb-2 bg-white rounded";
        listItem.innerHTML = `
          <span>${task.text}</span>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">${task.dueDate}</span>
            <button class="text-purple-500 hover:text-purple-700" onclick="removeTask(${index})">×</button>
          </div>
        `;
        taskList.appendChild(listItem);
      });
    };
  
    const addTask = () => {
      const taskInput = document.getElementById("input-box");
      const dueDateInput = document.getElementById("due-val");
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;
  
      if (taskText === "") return;
  
      tasks.push({ text: taskText, dueDate });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
  
      taskInput.value = "";
      dueDateInput.value = "";
    };
  
    document.getElementById("add-button").addEventListener("click", addTask);
  
    renderTasks();
});

// Global functions
window.removeTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "flex items-center justify-between p-2 mb-2 bg-white rounded";
        listItem.innerHTML = `
          <span>${task.text}</span>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">${task.dueDate}</span>
            <button class="text-purple-500 hover:text-purple-700" onclick="removeTask(${index})">×</button>
          </div>
        `;
        taskList.appendChild(listItem);
    });
};

window.addTask = () => {
    const taskInput = document.getElementById("input-box");
    const dueDateInput = document.getElementById("due-val");
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === "") return;

    tasks.push({ text: taskText, dueDate });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "flex items-center justify-between p-2 mb-2 bg-white rounded";
        listItem.innerHTML = `
          <span>${task.text}</span>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">${task.dueDate}</span>
            <button class="text-purple-500 hover:text-purple-700" onclick="removeTask(${index})">×</button>
          </div>
        `;
        taskList.appendChild(listItem);
    });

    taskInput.value = "";
    dueDateInput.value = "";
};
