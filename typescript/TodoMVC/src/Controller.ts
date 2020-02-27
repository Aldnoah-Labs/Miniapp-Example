import { TodoType } from './Type'
import Todo from './Todo'
import View from './View'

class Controller {

  constructor(public model: Todo, public view: View) {
    this.model.bindTodoListChanged(this._onTodoListViewChanged)
    this.view.addTodoListener(this._addTodoHandler)

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

}

export default Controller