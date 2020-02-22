import ToDoType from './TodoType'
import View from './View'
import Controller from './Controller'

import './css/tailwindcss.css'
import './css/_button.css'

//Todos Data
const todos: ToDoType[] = [
  {
    id: 1,
    isChecked: true,
    title: 'Belajar Typescript Dasar'
  },
  {
    id: 2,
    isChecked: false,
    title: 'Belajar Haskell'
  }
]

const app = new Controller(todos, new View())