import { TodoType } from './Type'
import Todo from './Todo'
import View from './View'

class Controller {

  constructor(public model: Todo, public view: View) {
    this.model.bindTodoListChanged(this._onTodoListViewChanged)
    this.view.addTodoListener(this._addTodoHandler)
    this.view.toggleisCompleteListener(this._isCompleteHandler)
    this.view.changeFilterListener(this._changeFilterHandler)
    this.view.clearCompletedListener(this._clearCompletedTodo)

    //dipslay initialize data
    this._onTodoListViewChanged(this.model.todos)
  }

  //display data to DOM when todos data updated
  _onTodoListViewChanged = (todos: TodoType[]): void => {
    this.view.dipslayTodos(todos)
  }

  //addtodo handler
  _addTodoHandler = (todoTitle: string): void => {
    this.model.addTodos(todoTitle)
  }

  //isComplete handler
  _isCompleteHandler = (id: number): void => {
    this.model.toggleisCompleteTodo(id)
  }

  //change filter handl;er
  _changeFilterHandler = (filterType: string): void => {
    this.model.changeFilter(filterType)
  }

  _clearCompletedTodo = (): void => {
    this.model.clearCompletedTodo()
  }

}

export default Controller