import React from 'react'
import { StyledColumn } from './styled/Column.styled'
import TaskCard from './TaskCard'
import { type ITask } from '../types/types'

interface ColumnProps {
  key: string
  name: string
  tasks: ITask[] | undefined
}

const Column = ({ key, name, tasks }: ColumnProps): JSX.Element => {
  return (
    <StyledColumn>
        <h1>{name}</h1>
        {tasks?.map((task) => {
          return <TaskCard key={task._id} task={task}/>
        })}
    </StyledColumn>
  )
}

export default Column
