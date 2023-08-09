import React from 'react'
import { StyledEditMenuIcon } from '../styled/StyledIcons/EditMenuIcon'
import TaskMenuModal from '../modals/Task/TaskMenuModal'
import img from '../../assets/icon-vertical-ellipsis.svg'
import { type ITask } from 'src/types/types'

interface EditTaskMenuIconProps {
  handleMenuToggle: () => void
  task: ITask
  taskMenu?: boolean
  toggleTaskModal: () => void
}

const EditTaskIcon = ({ handleMenuToggle, task, taskMenu, toggleTaskModal }: EditTaskMenuIconProps): JSX.Element => {
  return (
    <>
        <StyledEditMenuIcon onClick={handleMenuToggle}>
            <img style={{ height: '100%', width: '100%' }} src={img} />
        </StyledEditMenuIcon>
        {task
          ? <TaskMenuModal task={task}
                           taskMenu={taskMenu as boolean}
                           handleMenuToggle={handleMenuToggle}
                           toggleTaskModal={toggleTaskModal}
                           />
          : null}
    </>
  )
}

export default EditTaskIcon
