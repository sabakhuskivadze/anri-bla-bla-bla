const addBtn = document.querySelector('.btn1')
let counter = document.querySelector('.count')
const Nonetask = document.querySelector('.todo-none-img')
const taskActive = document.querySelector('.task-active')
const task1 = document.querySelector('.task-list')
const task2 = document.querySelector('.task-list-2')
const task3 = document.querySelector('.task-list-3')
const task4 = document.querySelector('.task-list-4')
const inputTodo = document.querySelector('.todoInput')
taskActive.classList.add('none')
counter = 0

const removeImg1 = document.querySelector('.removeImg')

addBtn.addEventListener('click', function () {
    if (counter <= 14) {
        counter++
        document.querySelector('.count').textContent = counter
    } else {
        console.log('error');
    }

    Nonetask.classList.add('none')
    taskActive.classList.add('block')
    // if (counter == 1) {
    //     task1.classList.remove('none')
    // } else if (counter == 2) {
    //     task2.classList.remove('none')
    // } else if (counter == 3) {
    //     task3.classList.remove('none')
    // } else if (counter == 4) {
    //     task4.classList.remove('none')
    // }

    const addDiv = document.querySelector('.task-active .container')
    const newDiv = document.createElement('div')
    const GROUPinput = document.createElement('div')
    const textparagrap = document.createElement('p')
    const remove = document.createElement('div')
    const removeImg = document.createElement('div')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')

    let task = inputTodo.value
    if (task && counter <= 15) {
        newDiv.classList.add('task-list')
        GROUPinput.classList.add("group-input")
        remove.classList.add('remove')
        removeImg.classList.add('removeImg')
        checkbox.classList.add('check-input')
        label.classList.add('checkInput')
        checkbox.type = 'checkbox'
        checkbox.id = task
        label.setAttribute('for', task)
        textparagrap.innerText = task
        newDiv.appendChild(GROUPinput)
        GROUPinput.appendChild(checkbox)
        GROUPinput.appendChild(label)
        GROUPinput.appendChild(textparagrap)
        newDiv.appendChild(remove)
        remove.appendChild(removeImg)
        addDiv.appendChild(newDiv)
        checkbox.addEventListener('click', function () {
            if (checkbox.checked) {
                textparagrap.style.color = '#808080'
            } else if (!checkbox.checked) {
                textparagrap.style.color = '#F2F2F2'
            }
        })
        inputTodo.value = ""
    } else {
        alert('please enter todo!.....')
        if (counter == 0) {
            counter = 0
            document.querySelector('.count').textContent = counter
        } else if (counter >= 1) {
            counter--
            document.querySelector('.count').textContent = counter
        }
    }
    removeImg.addEventListener('click', function () {
        newDiv.classList.remove('task-list')
        GROUPinput.classList.remove("group-input")
        remove.classList.remove('remove')
        removeImg.classList.remove('removeImg')
        textparagrap.innerText = ''
        counter--
        checkbox.classList.remove('check-input')
        label.classList.remove('checkInput')
        document.querySelector('.count').textContent = counter
        if (counter == 0) {
            Nonetask.classList.remove('none')
            taskActive.classList.remove('block')
        }
    })
});

