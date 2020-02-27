import { TodoType } from './Type'

class Todo {
  _onTodoListChanged: (todos: TodoType[]) => void

  constructor(public todos: TodoType[]) {
    //Define _onTodoListChanged to be null before it assign to callback
    this._onTodoListChanged = () => null
  }

  //binding TodoListViewCallback
  bindTodoListChanged(TodoListViewCallback: (todos: TodoType[]) => void): void {
    this._onTodoListChanged = TodoListViewCallback
  }

  //add todos
  addTodos(todoTitle: string): void {
    const todo = {
      id: new Date().getMilliseconds(),
      isDone: false,
      title: todoTitle
    }
    this.todos = this.todos.concat(todo)
    this._onTodoListChanged(this.todos)
  }

}

export default Todo