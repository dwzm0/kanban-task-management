import React from 'react'
import { StyledModalContainer, StyledModal } from 'src/globalStyle'
import { StyledFormWrapper } from '../styled/FormWrapper.styled'

interface AddTaskModalProps {
  toggleAddTaskModal: () => void
}

const AddTaskModal = ({ toggleAddTaskModal }: AddTaskModalProps): JSX.Element => {
  return (
    <StyledModalContainer onClick={toggleAddTaskModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <StyledFormWrapper title="Add New Task">
            </StyledFormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default AddTaskModal
