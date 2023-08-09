import React, { useState } from 'react'
import { StyledBoardMenu } from '../../styled/StyledModals/MenuModal.styled'
import { TextL } from '../../../globalStyle'
import DeleteTaskModal from './DeleteTaskModal'
import { type ITask } from 'src/types/types'

interface TaskMenuModalProps {
  task: ITask
}

const TaskMenuModal = ({ task }: TaskMenuModalProps): JSX.Element => {
  const [deleteTask, setDeleteTask] = useState<boolean>(false)
  const [editTask, setEditTask] = useState<boolean>(false)

  const handelCancelDelete = () => {
    setDeleteTask(!deleteTask)
  }
  /*
  const handelEdit = () => {
    setEditTask(!editTask)
    toggleTaskMenu()
  } */

  return (
    <>
      <StyledBoardMenu>
          <TextL onClick={() => { setEditTask(!editTask) }}>Edit Task</TextL>
          <TextL onClick={() => { setDeleteTask(!deleteTask) }}>Delete Task</TextL>
      </StyledBoardMenu>
      {deleteTask ? <DeleteTaskModal task={task} handleCancel={handelCancelDelete}/> : null}
    </>
  )
}
export default TaskMenuModal
