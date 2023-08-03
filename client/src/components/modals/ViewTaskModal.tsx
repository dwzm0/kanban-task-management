import React from 'react'
import { StyledModalContainer, StyledModal, FlexRowContainer, HeadingL, TextL, TextM } from '../../globalStyle'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import EditBoardMenuIcon from '../icons/EditBoardMenuIcon'
import FormWrapper from '../FormWrapper'
import { type ITask } from '../../types/types'
import SubtaskField from '../SubtaskField'
import { useAppSelector } from '../../hooks/useReduxHooks'
import Select from '../Select'

interface ViewTaskModalProps {
  task: ITask
  toggleTaskModal: () => void
}

const ViewTaskModal = ({ task, toggleTaskModal }: ViewTaskModalProps): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)

  return (
    <StyledModalContainer onClick={toggleTaskModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper >
                <StyledInputGroupContainer>
                    <FlexRowContainer>
                        <HeadingL>{task.title}</HeadingL>
                        <EditBoardMenuIcon handleBoardMenu={() => { console.log('ASDASD') }}/>
                    </FlexRowContainer>
                    <TextL>{task?.description}</TextL>
                    <TextM>Subtasks  ({task?.subtasks?.filter((subtask) => subtask.isCompleted).length} of {task?.subtasks?.length} )</TextM>
                    {task.subtasks?.map((subtask) => {
                      return <SubtaskField key={subtask._id} id={subtask._id} title={subtask.title} completeStatus={subtask.isCompleted}/>
                    })}
                    <Select cols={cols} status={task?.status}/>
                </StyledInputGroupContainer>
            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default ViewTaskModal
