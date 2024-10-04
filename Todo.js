
const list = document.getElementById('list');  
const addBtn = document.getElementById('addbutton');  
const delBtn = document.getElementById('delbutton');  
const input = document.getElementById('taskInput');  


addBtn.addEventListener('click', function() {
    if (input.value !== '') {  
        const task = document.createElement('li');  
        task.innerText = input.value;  
        task.classList.add('item');  
        
        list.appendChild(task); 
        input.value = '';  
    }
});


delBtn.addEventListener('click', function() {
    const task = document.querySelector('.item');  
    if (task) {
        list.removeChild(task);  
    }
});
