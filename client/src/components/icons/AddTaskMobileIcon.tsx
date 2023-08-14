import React from 'react'
import { StyledAddTaskMobileIcon } from '../styled/StyledIcons/AddTaskMobileIcon.styled'
import addTaskMobIcon from '../../assets/icon-add-task-mobile.svg'

const AddTaskMobileIcon = () => {
  return (
    <StyledAddTaskMobileIcon>
        <img src={addTaskMobIcon}/>
    </StyledAddTaskMobileIcon>
  )
}

export default AddTaskMobileIcon
