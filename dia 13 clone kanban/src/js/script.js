const tasks = document.querySelectorAll('.tasks li')
let draggedTask = null;


for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]
    task.addEventListener('dragstart', function (event) {
        draggedTask = task
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData("text/html", task.innerHTML)
        task.classList.add("dragging")
    })

    task.addEventListener("dragend", function () {
        draggedTask.classList.remove('dragging')
        draggedTask = null;
    })
}

const columns = document.querySelectorAll('.tasks')

for (let i = 0; i < columns.length; i++) {
    const column = columns[i]

    column.addEventListener("dragover", function (event) {

        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        column.classList.add("dragover")
    })
    column.addEventListener("dragleave", function () {
        column.classList.remove('dragover')
    })
    column.addEventListener('drop', function (event) {
        event.preventDefault()

        const task = document.createElement('li')
        task.innerHTML = event.dataTransfer.getData('text/html')
        task.setAttribute('draggable', true)
        task.addEventListener("dragstart", function (event) {
            draggedTask = task
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData("text/html", task.innerHTML)
            task.classList.add("dragging")
        })

        column.appendChild(task)
        column.classList.remove('dragover')

        const columnAnterior = draggedTask.parentNode
        columnAnterior.removeChild(draggedTask)


    })
}


const addTaskForm = document.querySelector('#addTask')
const addTaskinput = document.querySelector('input')

addTaskForm.addEventListener('submit', function(e){
    e.preventDefault()

    const newTaskText = addTaskinput.value.trim()


    if(newTaskText !== ''){

        const newTask = document.createElement('li')
        newTask.textContent = newTaskText
        newTask.setAttribute('draggable', true)
        newTask.addEventListener("dragstart", function (event) {
            draggedTask = newTask
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData("text/html", newTask.innerHTML)
            newTask.classList.add("dragging")
        })
        document.querySelector('#todo').appendChild(newTask)
        addTaskinput.value = ''
    }
})