const form = document.querySelector('form')
const allTask = document.getElementById('allTask')

const input = document.querySelector('input')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const text = input.value.trim();
    if(text=="")return;


    // creating a div

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.style.width= "60px";

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.style.width= "60px";
    doneButton.style.marginRight= "10px";
    

    parent.append(task,doneButton,deleteButton);
    allTask.append(parent);

    deleteButton.addEventListener('click', (e)=>{
        parent.remove();
    })
    doneButton.addEventListener('click', (e)=>{
        task.style.textDecoration= "line-through";
        task.style.color = 'grey';

    })
    form.reset();

})