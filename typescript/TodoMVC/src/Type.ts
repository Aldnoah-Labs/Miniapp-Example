type TodoType = {
  id: number,
  isComplete: boolean,
  title: string,
}

enum filterType {
  all,
  complete
}

export { TodoType, filterType }