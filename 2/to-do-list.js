const addButton = document.querySelector('.add_btn');
const taskInput = document.querySelector('.task_input');
const taskList = document.querySelector('.task_list');

addButton.addEventListener('click', function() {
  let newTask = document.createElement('li');
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  taskInput.value = '';  
})

taskList.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	}
});

