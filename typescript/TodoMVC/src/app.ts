import ToDoType from './TodoType'
import Todo from './Todo'
import View from './View'
import Controller from './Controller'

import './css/tailwindcss.css'
import './css/_button.css'

//Data
const data = new Todo([
  {
    id: 1,
    isChecked: true,
    title: 'Belajar Typescript Dasar'
  },
  {
    id: 2,
    isChecked: false,
    title: 'Belajar Haskell Dasar'
  }
])

//View
const view = new View()

const app = new Controller(data, view)