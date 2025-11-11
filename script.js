let textfield = document.getElementById("input")
let btn = document.getElementById("add")
let tasksdiv = document.getElementById("tasks")
let h1 = document.getElementById("h1")
let tasks = []

btn.addEventListener("click", addtask)
textfield.addEventListener("keydown", usertyped)

setInterval(async ()=>{   
    h1.classList.remove("glitch")
    void h1.offsetWidth;
    await new Promise(resolve=> setTimeout(resolve, 20))
    h1.classList.add("glitch")
}, 3000)

function addtask(){
    let text = textfield.value
    if (tasks.includes(text) || text == ""){
        return
    }
    
    textfield.value = ""
    insert_into_db(text)
    read_from_db()
}
function add_task_dom(value){
    tasks.push(value)
    let task = document.createElement("section")
    let span = document.createElement("span")
    span.textContent = value
    task.appendChild(span)
    task.className = "task"
    task.addEventListener("click", deletetask)
    tasksdiv.appendChild(task) 
}
function deletetask(e){
    e.currentTarget.classList.add("grayed")
}
function usertyped(e){
    let value = textfield.value + e.key
    if (e.key == "Enter"){
        btn.click()
        return
    }
    if (tasks.includes(value)){
        textfield.classList.add("red")
        btn.classList.add("red")
    }else{
       textfield.classList.remove("red")
        btn.classList.remove("red") 
    }
}

function insert_into_db(task){
    const form = new FormData();
    form.append('task', task);

    fetch('http://localhost:8000/backend/add.php', {
        method: 'POST',
        body: form
    })
    .then(res => res.json())
    .then(data =>{
        if (data.error_msg != ''){
            console.log(data.error_msg);
            return;
        }
    })
    .catch(err=>{
        console.log(err);
    });
}

function read_from_db(){
    fetch('http://localhost:8000/backend/get.php', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(tasks=>{
            
            clear_tasks_dom()
            tasks.forEach(task => {
                add_task_dom(task.task)
            });
    })
    .catch(err=>console.log(err))
}
function clear_tasks_dom(){
    tasksdiv.innerHTML = ""
}
read_from_db()