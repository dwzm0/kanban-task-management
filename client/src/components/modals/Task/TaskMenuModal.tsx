import React, { useState } from 'react'
import { StyledTaskMenu } from 'src/components/styled/StyledModals/TaskMenuModal.styled'
import { TextL } from '../../../globalStyle'
import DeleteTaskModal from './DeleteTaskModal'
import { type ITask } from 'src/types/types'
import EditTaskModal from './EditTaskModal'

interface TaskMenuModalProps {
  handleMenuToggle: () => void
  task: ITask
  taskMenu: boolean
  toggleTaskModal: () => void
}

const TaskMenuModal = ({
  task,
  handleMenuToggle,
  taskMenu,
  toggleTaskModal
}: TaskMenuModalProps): JSX.Element => {
  const [deleteTask, setDeleteTask] = useState<boolean>(false)
  const [editTask, setEditTask] = useState<boolean>(false)

  const handelCancelDelete = () => {
    setDeleteTask(!deleteTask)
    handleMenuToggle()
  }

  const toggleEditTaskOn = () => {
    handleMenuToggle()
    setEditTask(!editTask)
  }

  const toggleEditTaskOff = () => {
    toggleTaskModal()
    setEditTask(!editTask)
  }

  const openDeleteModal = () => {
    setDeleteTask(!deleteTask)
  }

  return (
    <>{taskMenu
      ? <StyledTaskMenu>
          <TextL onClick={toggleEditTaskOn}>Edit Task</TextL>
          <TextL onClick={openDeleteModal}>Delete Task</TextL>
      </StyledTaskMenu>
      : null}
      {deleteTask
        ? <DeleteTaskModal task={task}
          handleCancel={handelCancelDelete}/>
        : null}
      {editTask
        ? <EditTaskModal task={task}
          toggleEditTask={toggleEditTaskOff}/>
        : null}
    </>
  )
}
export default TaskMenuModal
