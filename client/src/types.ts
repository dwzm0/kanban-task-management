export interface IBoard {
  _id: string
  name: string
  columns?: IColumn[]
}

export interface IColumn {
  _id: string
  name: string
  tasks?: ITask[]
}

export interface ITask {
  _id: string
  title: string
  description?: string
  status: IColumn['name']
  subtasks?: ISubTask[]
}

export interface ISubTask {
  _id: string
  title: string
  isCompleted: boolean
}
