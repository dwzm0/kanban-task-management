/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledTaskCard } from './styled/TaskCard.styled'
import { type ITask } from '../types/types'
import { HeadingM, TextM } from '../globalStyle'
import ViewTaskModal from './modals/ViewTaskModal'

interface TaskProps {
  task: ITask
}

const TaskCard = ({ task }: TaskProps): JSX.Element => {
  const [taskModal, setTaskModal] = useState<boolean>(false)

  const toggleTaskModal = () => {
    setTaskModal(!taskModal)
  }

  return (
    <>
      <StyledTaskCard onClick={toggleTaskModal}>
          <HeadingM>{task.title}</HeadingM>
          <TextM>{task?.subtasks?.filter((subtask) => subtask.isCompleted).length} of {task?.subtasks?.length} subtasks</TextM>
      </StyledTaskCard>
      {taskModal ? <ViewTaskModal task={task} toggleTaskModal={toggleTaskModal}/> : null}
    </>
  )
}

export default TaskCard
