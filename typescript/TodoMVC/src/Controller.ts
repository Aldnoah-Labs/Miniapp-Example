import Todo from './Todo'
import View from './View'
import ToDoType from './TodoType'

class Controller extends Todo {
  constructor(todos: ToDoType[], public view: View) {
    super(todos)
    this.bindTodoListChanged(this.onToDoListChanged)
    this.view.addTodoListener(this.addTodoHandler)
    this.view.deleteTodoListener(this._deleteTodoHandler)
    this.view.toggleIsCompleteListener(this._isCompleteHandler)


    this.onToDoListChanged(this.todos)
    this.view.changeFilterListener(this.changeFilter)
    this.view.clearCompletedListener(this.clearCompletedTodo)
  }

  clearCompletedTodo = (): void => {
    super.clearCompletedTodo()
  }

  changeFilter = (filterType: string): void => {
    super.changeFilter(filterType)
  }

  onToDoListChanged = (todos: ToDoType[]): void => {
    this.view.dipslayTodos(todos)
  }

  addTodoHandler = (todoTitle: string): void => {
    this.addTodos(todoTitle)
  }

  _deleteTodoHandler = (id: number): void => {
    super.deleteTodos(id)
  }

  _isCompleteHandler = (id: number): void => {
    super.toggleIsComplete(id)
  }
}


export default Controller;
