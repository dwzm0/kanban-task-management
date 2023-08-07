import React from 'react'
import { StyledModalContainer, StyledModal, TextM } from 'src/globalStyle'
import FormWrapper from '../FormWrapper'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import Input from '../Input'
import TextArea from '../TextArea'

interface AddTaskModalProps {
  toggleAddTaskModal: () => void
}

const AddTaskModal = ({ toggleAddTaskModal }: AddTaskModalProps): JSX.Element => {
  return (
    <StyledModalContainer onClick={toggleAddTaskModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper title="Add New Task">
              <StyledInputGroupContainer>

               <TextM>Title</TextM>
                <Input inputType='text' inputName='Title' placeholder='e.g Take coffee break'/>

                <TextArea label='Description' name='description'
                          placeholder={`e.g. It's always good to take a break. This 15 minute break will 
                          recharge the batteries a little.`} rows={7} cols={30}
                />

              </StyledInputGroupContainer>
            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default AddTaskModal
