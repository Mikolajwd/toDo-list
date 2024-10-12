console.log("hello to do list, it's me");

let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () =>{
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()

        ulList.append(newTodo)

        todoInput.value = " "
        errorInfo.textContent = " "
    } else {
        errorInfo.textContent = "wpisz treść zadania"
    }
    
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)
    
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.querySelector('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class = "fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)

}


const checkClick = (e) => {
    if (e.target.matches('.complete')){
        console.log('complete');
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
        console.log('open popup edit to do ');
        editTodo()
    } else if (e.target.matches('.delete')){
        console.log('delete');
    }

}



const editTodo = () => {
    popup.style.display = 'flex'
}

const closePopup = (params) => {
    popup.style.display = 'none'
}





document.addEventListener('DOMContentLoaded', main)