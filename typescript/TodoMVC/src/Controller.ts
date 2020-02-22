import Todo from './Todo'
import View from './View'
import ToDoType from './TodoType'

class Controller extends Todo {
  constructor(todos: ToDoType[], public view: View) {
    super(todos)
    this.bindTodoListChanged(this._onToDoListChanged)
    this.view.addTodoListener(this._addTodoHandler)
    this.view.deleteTodoListener(this._deleteTodoHandler)
    this.view.toggleIsCompleteListener(this._isCompleteHandler)


    this._onToDoListChanged(this.todos)
    this.view.changeFilterListener(this._changeFilter)
    this.view.clearCompletedListener(this._clearCompletedTodo)
  }

  _clearCompletedTodo = (): void => {
    super.clearCompletedTodo()
  }

  _changeFilter = (filterType: string): void => {
    super.changeFilter(filterType)
  }

  _onToDoListChanged = (todos: ToDoType[]): void => {
    this.view.dipslayTodos(todos)
  }

  _addTodoHandler = (todoTitle: string): void => {
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
