import React from 'react'
import { StyledTaskCard } from './styled/TaskCard.styled'
import { type ITask } from '../types/types'
import { HeadingM, TextM } from '../globalStyle'

interface TaskProps {
  task: ITask
}

const TaskCard = ({ task }: TaskProps): JSX.Element => {
  return (
    <StyledTaskCard>
        <HeadingM>{task.title}</HeadingM>
        <TextM>{task?.subtasks?.filter((subtask) => subtask.isCompleted).length} of {task?.subtasks?.length} subtasks</TextM>
    </StyledTaskCard>
  )
}

export default TaskCard
