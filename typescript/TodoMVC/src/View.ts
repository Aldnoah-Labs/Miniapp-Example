import ToDoType from './TodoType'

class View {

  _ENTER_KEY: number = 13
  _toDoListEl: HTMLElement
  _inputTodoEl: HTMLInputElement
  _closeBtn: NodeListOf<Element>
  _filterAllBtn: HTMLButtonElement
  _filterCompleteBtn: HTMLButtonElement
  _clearCompletedBtn: HTMLButtonElement

  constructor() {
    this._toDoListEl = <HTMLElement>document.getElementById('todo-list')
    this._inputTodoEl = <HTMLInputElement>document.getElementById('title')
    this._closeBtn = document.querySelectorAll(".btn-close")
    this._filterAllBtn = <HTMLButtonElement>document.getElementById('filter-all');
    this._filterCompleteBtn = <HTMLButtonElement>document.getElementById('filter-complete');
    this._clearCompletedBtn = <HTMLButtonElement>document.getElementById('filter-clear');

  }

  clearCompletedListener = (clearCompletedHandler: () => void) => {
    this._clearCompletedBtn.addEventListener('click', () => {
      clearCompletedHandler()
    })
  }

  changeFilterListener = (changeFilterHandler: (filterType: string) => void) => {
    this._filterAllBtn.addEventListener('click', () => {
      this._filterAllBtn.classList.add('font-bold', 'text-green-500')
      this._filterCompleteBtn.classList.remove('font-bold', 'text-green-500')
      this._filterCompleteBtn.classList.add('text-gray-500')
      changeFilterHandler('all')
    })
    this._filterCompleteBtn.addEventListener('click', () => {
      this._filterCompleteBtn.classList.add('font-bold', 'text-green-500')
      this._filterAllBtn.classList.remove('font-bold', 'text-green-500')
      this._filterAllBtn.classList.add('text-gray-500')
      changeFilterHandler('complete')
    })
  }



  getInputElValue(): string {
    return this._inputTodoEl.value
  }

  _resetInputElValue = () => {
    this._inputTodoEl.value = ''
  }


  dipslayTodos(todos: ToDoType[]) {

    while (this._toDoListEl.firstChild) {
      this._toDoListEl.removeChild(this._toDoListEl.firstChild)
    }


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
      checkbox.checked = todo.isChecked

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

    //debugging
    //console.log(todos)

  }

  addTodoListener = (addHandler: (todoTitle: string) => void): void => {
    this._inputTodoEl.addEventListener('keyup', (e: any) => {

      if (e.which === this._ENTER_KEY) {
        if (this.getInputElValue()) {
          addHandler(this.getInputElValue())
          this._resetInputElValue()
        }
      }
    })
  }

  deleteTodoListener = (deleteHandler: (id: number) => void): void => {
    this._toDoListEl.addEventListener('click', (e: any) => {
      if (e.target.className === 'close-icon') {
        const id = parseInt(e.target.parentElement.parentElement.parentElement.id)
        deleteHandler(id)
      }
    })
  }

  toggleIsCompleteListener = (isCompleteHandler: (id: number) => void) => {
    this._toDoListEl.addEventListener('click', (e: any) => {
      if (e.target.type === 'checkbox') {
        const id = parseInt(e.target.parentElement.parentElement.id)
        isCompleteHandler(id)
      }
    })

  }
}

export default View;
