console.log("hello to do list, it's me");

let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () =>{
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}


// 1. tworzy nowy element (li)
// 2. dodawać nowy element do ul Listy
// 3. funkcja jodpalana na click w przycisky ADD
// 4. przychwytuję treść z inputa i umieszcza go s nowoutworzonym LI
// 5. funkcja nie doda do toodósa pustego inputa


const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        console.log(newTodo)
        ulList.append(newTodo)
        errorInfo.textContent = ""
    } else {
        errorInfo.textContent = "wpisz treść zadania"
    }
    
}




document.addEventListener('DOMContentLoaded', main)