import Todo from './Todo'
import View from './View'
import Controller from './Controller'

import './css/tailwindcss.css'
import './css/_button.css'

//Initialize Data
const data = new Todo([
  {
    id: 1,
    isDone: true,
    title: 'Belajar Typescript Dasar'
  },
  {
    id: 2,
    isDone: false,
    title: 'Belajar Haskell Dasar'
  }
])

//View
const view = new View()
const app = new Controller(data, view)