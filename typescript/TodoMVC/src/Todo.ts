import ToDoType from './TodoType'

class Todo {

  onTodoListChanged: any
  _FILTER: string = 'all'
  constructor(public todos: ToDoType[]) {
  }

  bindTodoListChanged(callback: any): void {
    this.onTodoListChanged = callback
  }

  _commit(todos: ToDoType[]): void {
    this.onTodoListChanged(todos)
  }

  addTodos(todoTitle: string): void {
    const todo = {
      id: new Date().getMilliseconds(),
      isChecked: false,
      title: todoTitle
    }
    this.todos = this.todos.concat(todo)
    this._commit(this.getTodos())
  }

  changeFilter(filterTodo: string) {
    this._FILTER = filterTodo
    this._commit(this.getTodos())
  }

  getTodos(): ToDoType[] {
    return this._FILTER === 'complete' ? this.todos.filter(todo => todo.isChecked === true) : this.todos
  }

  deleteTodos(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this._commit(this.getTodos())
  }

  toggleIsComplete(id: number): void {
    this.todos = this.todos.map(todo => todo.id === id ? { id: todo.id, isChecked: !todo.isChecked, title: todo.title } : todo)
    this._commit(this.getTodos())
  }

  clearCompletedTodo(): void {
    this.todos = this.todos.map(todo => ({ ...todo, isChecked: false }))
    this._commit(this.getTodos())
  }

}

export default Todo
