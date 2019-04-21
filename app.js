function onReady() {
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    let id = 0;
  
    function createNewToDo(){
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) return null;
  
      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id
      });
  
      id++;
  
      newToDoText.value = "";
  
      renderTheUI();
    }
  
    function renderTheUI(){
      const ToDoList = document.getElementById("toDoList");
  
      toDoList.textContent = "";
  
      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        newLi.className = "newLiStyle";
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        const delBtn = document.createElement('button');
        
        delBtn.className = "mdl-button mdl-js-button mdl-button--raised mdl-button--colored delBtnStyle"
        delBtn.textContent = "Delete";
  
        delBtn.addEventListener('click', event => {
          toDos = toDos.filter(function(item){
            return item.id !== toDo.id;
          })

          renderTheUI();
          
        });
  
        newLi.textContent = toDo.title;
  
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(delBtn);
  
      });
    }
  
    addToDoForm.addEventListener("submit", event => {
      event.preventDefault();
      createNewToDo();
    });
    renderTheUI();
  }
  
  
  window.onload = function() {
    onReady();
   };
  