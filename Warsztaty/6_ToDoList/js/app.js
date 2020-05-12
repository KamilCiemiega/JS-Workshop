let addTaskButton = document.querySelector('#addTaskButton');
let taskInput = document.querySelector('#taskInput');
let taskList = document.querySelector('#taskList');
let taskCounter = 0;
let removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
addTaskButton.addEventListener('click', function () {
   if (taskInput.value.length > 5 && taskInput.value.length < 100) {
       let counter = document.createElement('div');
       let newTaskList = document.createElement('li');
       let newTaskTitle = document.createElement('h1');
       let newDeleteButton = document.createElement('button');
       let newCompleteButton = document.createElement('button');
       taskCounter++;
       newTaskTitle.innerText = taskInput.value;
       taskInput.value = '';
       newDeleteButton.innerText = 'Delete';
       newCompleteButton.innerText = 'Complete';
       counter.innerText = taskCounter;
       newTaskList.appendChild(newTaskTitle);
       newTaskList.appendChild(newDeleteButton);
       newTaskList.appendChild(newCompleteButton);
       taskList.appendChild(newTaskList);
       newTaskList.insertBefore(counter, newTaskTitle);
       newCompleteButton.addEventListener('click', function () {
           newTaskTitle.classList.toggle('complete');
           newTaskList.classList.toggle('remove');
       });
       newDeleteButton.addEventListener('click', function () {
           newTaskList.remove();
       });
       removeFinishedTasksButton.addEventListener('click', function () {
           let tasksToRemove = document.querySelectorAll('.remove');
           for (let i = 0; i < tasksToRemove.length; i++) {
               tasksToRemove[i].remove();
           }
       });
   }
});