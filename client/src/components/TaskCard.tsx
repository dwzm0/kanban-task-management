import React from 'react'
import { StyledTaskCard } from './styled/TaskCard.styled'
import { type ITask } from '../types/types'

interface TaskProps {
  task: ITask
}

const TaskCard = ({ task }: TaskProps): JSX.Element => {
  console.log(task)
  return (
    <StyledTaskCard>{task.title}</StyledTaskCard>
  )
}

export default TaskCard
