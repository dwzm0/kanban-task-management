import { Document }  from 'mongoose';

export interface ISubTask extends Document {
    title: string
    isCompleted: boolean
}

export interface ITask extends Document {
    _id?: string
    title: string
    description?: string
    status: IColumn['name'] 
    subtasks?: ISubTask[]
}

export interface IColumn extends Document {
    name: string
    tasks?: ITask[]
}

export interface IBoard extends Document {
    name: string
    columns?: IColumn[]
}




