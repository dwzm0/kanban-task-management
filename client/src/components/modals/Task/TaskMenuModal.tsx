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
}

const TaskMenuModal = ({ task, handleMenuToggle, taskMenu }: TaskMenuModalProps): JSX.Element => {
  const [deleteTask, setDeleteTask] = useState<boolean>(false)
  const [editTask, setEditTask] = useState<boolean>(false)

  const handelCancelDelete = () => {
    setDeleteTask(!deleteTask)
    handleMenuToggle()
  }

  const toggleEditTask = () => {
    setEditTask(!editTask)
  }

  const openDeleteModal = () => {
    setDeleteTask(!deleteTask)
  }

  return (
    <>{taskMenu
      ? <StyledTaskMenu>
          <TextL onClick={toggleEditTask}>Edit Task</TextL>
          <TextL onClick={openDeleteModal}>Delete Task</TextL>
      </StyledTaskMenu>
      : null}
      {deleteTask ? <DeleteTaskModal task={task} handleCancel={handelCancelDelete}/> : null}
      {editTask ? <EditTaskModal task={task} toggleEditTask={toggleEditTask}/> : null}
    </>
  )
}
export default TaskMenuModal
