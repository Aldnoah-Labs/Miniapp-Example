import { TodoType } from './Type'

class View {

  _ENTER_KEY: number = 13
  _toDoListEl: HTMLElement
  _inputTodoEl: HTMLInputElement

  constructor() {
    this._toDoListEl = <HTMLElement>document.getElementById('todo-list')
    this._inputTodoEl = <HTMLInputElement>document.getElementById('title')
  }

  //get input value
  _getInputElValue(): string {
    return this._inputTodoEl.value
  }

  //reset input value
  _resetInputElValue = () => {
    this._inputTodoEl.value = ''
  }

  //display todos Data to DOM
  dipslayTodos(todos: TodoType[]) {

    //reset current todos element
    while (this._toDoListEl.firstChild) {
      this._toDoListEl.removeChild(this._toDoListEl.firstChild)
    }

    //insert todos data to DOM
    todos.forEach(todo => {
      const li = document.createElement('li')
      li.classList.add('relative', 'flex', 'justify-between', 'mb-4')
      const id = new Number(todo.id)
      li.id = id.toString()

      const label = document.createElement('label')
      label.classList.add('inline-flex', 'items-center')

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.classList.add('form-checkbox')
      checkbox.checked = todo.isDone

      const title = document.createElement('span')
      title.classList.add('ml-2')
      title.textContent = todo.title

      const button = document.createElement('button')
      const closeIconContainer = document.createElement('div')
      closeIconContainer.classList.add('close-icon-container')

      const closeIcon = document.createElement('span')
      closeIcon.classList.add('close-icon')
      closeIcon.textContent = 'x'

      closeIconContainer.append(closeIcon)
      button.append(closeIconContainer)
      label.append(checkbox, title)
      li.append(label, button)

      this._toDoListEl.append(li)
    })

  }

  //addtodo listener
  addTodoListener = (addHandler: (todoTitle: string) => void): void => {
    this._inputTodoEl.addEventListener('keyup', (e: any) => {

      if (e.which === this._ENTER_KEY) {
        if (this._getInputElValue()) {
          addHandler(this._getInputElValue())
          this._resetInputElValue()
        }
      }
    })
  }

}

export default View