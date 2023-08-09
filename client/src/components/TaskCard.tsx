import React, { useState } from 'react'
import { StyledTaskCard } from './styled/TaskCard.styled'
import { type ITask } from '../types/types'
import { HeadingM, TextM } from '../globalStyle'
import ViewTaskModal from './modals/Task/ViewTaskModal'

interface TaskProps {
  task: ITask
}

const TaskCard = ({ task }: TaskProps): JSX.Element => {
  const [taskModal, setTaskModal] = useState<boolean>(false)

  const toggleTaskModal = () => {
    setTaskModal(!taskModal)
  }

  const completedSubTasks = task?.subtasks?.filter((subtask) => subtask.isCompleted).length
  const totalSubTasks = task?.subtasks?.length

  return (
    <>
      <StyledTaskCard onClick={toggleTaskModal}>
          <HeadingM>{task.title}</HeadingM>
          <TextM>{completedSubTasks} of {totalSubTasks} subtasks</TextM>
      </StyledTaskCard>
      {taskModal ? <ViewTaskModal task={task} toggleTaskModal={toggleTaskModal}/> : null}
    </>
  )
}

export default TaskCard
