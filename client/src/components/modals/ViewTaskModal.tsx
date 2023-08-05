/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { StyledModalContainer, StyledModal, TextL, TextM } from '../../globalStyle'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import FormWrapper from '../FormWrapper'
import { type ITask } from '../../types/types'
import SubtaskField from '../SubtaskField'
import { useAppSelector } from '../../hooks/useReduxHooks'
import Select from '../Select'

interface ViewTaskModalProps {
  task: ITask
  toggleTaskModal: () => void
}

export interface IFormInput {
  subtasks: [{ title: string, isCompleted: boolean }]
  status: string
}

const ViewTaskModal = ({ task, toggleTaskModal }: ViewTaskModalProps): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)
  const formRef = useRef<HTMLFormElement>(null)

  const { handleSubmit, register } = useForm<ITask>({ defaultValues: {} })
  const onSubmit: SubmitHandler<ITask> = data => { console.log(data) }

  const closeAndSave = async () => {
    formRef.current?.requestSubmit()
    toggleTaskModal()
  }

  return (
    <StyledModalContainer onClick={closeAndSave}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper onSubmit={handleSubmit(onSubmit)} ref={formRef} title={task.title} menuIcon={true} handleBoardMenu={() => { console.log('WORKIGN') }}>
                <StyledInputGroupContainer>
                    <TextL>{task?.description}</TextL>
                    <TextM>Subtasks  ({task?.subtasks?.filter((subtask) => subtask.isCompleted).length} of {task?.subtasks?.length} )</TextM>
                    {task.subtasks?.map((subtask, i) => {
                      return <SubtaskField register={register} key={i} arrKey={i} id={subtask._id} title={subtask.title} completeStatus={subtask.isCompleted} />
                    })}
                    <Select cols={cols} status={task?.status}/>

                </StyledInputGroupContainer>
            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default ViewTaskModal
