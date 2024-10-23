function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskValue = inputBox.value.trim();

    if (taskValue) {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        const dueVal = document.getElementById('due-val').value;
        if (dueVal) {
            listItem.textContent += ` (Due: ${dueVal})`;
        }

        const listContain = document.getElementById('list-contain');
        listContain.appendChild(listItem);

        inputBox.value = '';
    } else {
        alert('Please enter a task.');
    }
}