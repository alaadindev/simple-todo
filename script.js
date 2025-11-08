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
    tasks.push(text)
    textfield.value = ""
    console.log(text)
    let task = document.createElement("section")
    let span = document.createElement("span")
    span.textContent = text
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
    console.log(e.key, value)
}