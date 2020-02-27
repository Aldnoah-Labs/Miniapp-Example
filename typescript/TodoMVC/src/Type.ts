type TodoType = {
  id: number,
  isComplete: boolean,
  title: string,
}

enum filterType {
  all = 'all',
  complete = 'complete'
}

export { TodoType, filterType }