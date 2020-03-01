import { TodoType, filterType } from './Type'

class Todo {
  _FILTER: filterType = filterType.all
  _onTodoListChanged: (todos: TodoType[]) => void

  constructor(public todos: TodoType[]) {
    //Define _onTodoListChanged to be null before it assign to callback
    this._onTodoListChanged = () => null
  }

  //binding TodoListViewCallback
  bindTodoListChanged(TodoListViewCallback: (todos: TodoType[]) => void): void {
    this._onTodoListChanged = TodoListViewCallback
  }

  //get todos by filter
  getTodos(): TodoType[] {
    return this._FILTER === filterType.complete ? this.todos.filter(todo => todo.isComplete === true) : this.todos
  }

  //add todos
  addTodos(todoTitle: string): void {
    const todo = {
      id: new Date().getMilliseconds(),
      isComplete: false,
      title: todoTitle
    }
    this.todos = this.todos.concat(todo)
    this._onTodoListChanged(this.todos)
  }

  //delete todos
  deleteTodos(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this._onTodoListChanged(this.getTodos())
  }

  //change filter
  changeFilter(filterTodo: filterType) {
    this._FILTER = filterTodo
    this._onTodoListChanged(this.getTodos())
  }

  //toggle isComplete todo
  toggleisCompleteTodo(id: number): void {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
    this._onTodoListChanged(this.getTodos())
  }

  //unchecklist completed todos
  clearCompletedTodo(): void {
    this.todos = this.todos.map(todo => ({ ...todo, isComplete: false }))
    this._onTodoListChanged(this.getTodos())
  }

}

export default Todo