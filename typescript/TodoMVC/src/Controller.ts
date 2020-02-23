import Todo from './Todo'
import View from './View'
import ToDoType from './TodoType'

class Controller {
  constructor(public model: Todo, public view: View) {
    this.model.bindTodoListChanged(this._onToDoListChanged)
    this.view.addTodoListener(this._addTodoHandler)
    this.view.deleteTodoListener(this._deleteTodoHandler)
    this.view.toggleIsCompleteListener(this._isCompleteHandler)


    this._onToDoListChanged(this.model.todos)
    this.view.changeFilterListener(this._changeFilter)
    this.view.clearCompletedListener(this._clearCompletedTodo)
  }

  _clearCompletedTodo = (): void => {
    this.model.clearCompletedTodo()
  }

  _changeFilter = (filterType: string): void => {
    this.model.changeFilter(filterType)
  }

  _onToDoListChanged = (todos: ToDoType[]): void => {
    this.view.dipslayTodos(todos)
  }

  _addTodoHandler = (todoTitle: string): void => {
    this.model.addTodos(todoTitle)
  }

  _deleteTodoHandler = (id: number): void => {
    this.model.deleteTodos(id)
  }

  _isCompleteHandler = (id: number): void => {
    this.model.toggleIsComplete(id)
  }
}


export default Controller;
