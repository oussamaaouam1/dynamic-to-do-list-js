document.addEventListener('DOMContentLoaded' , () =>{

  //constent creation===========
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

  // addTask function============
  function addTask(taskText, save = true) {
    taskText = taskInput.value.trim();


    if (taskText==="") {
      alert("try enter a valid task!");
    }
    else{
      const textBar = document.createElement('li');
      textBar.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";

      removeBtn.classList.add('remove-btn');
      removeBtn.onclick = ()=>  {
        taskList.removeChild(textBar);
        removeTask(taskText);
      };

      textBar.appendChild(removeBtn);
      taskList.appendChild(textBar);

      taskInput.value = "";

      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    }
    

    function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
    


  }

  
  addButton.addEventListener('click',() => addTask());

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
    
      if (taskInput.value ==="") {
        alert("try enter a valid task!");
      }else{
        addTask();
      }
    }
    });
    
});