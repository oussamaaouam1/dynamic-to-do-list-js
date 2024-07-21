document.addEventListener('DOMContentLoaded' , () =>{

  //constent creation===========
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  

  // addTask function============
  function addTask() {
    const taskText = taskInput.value.trim();


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