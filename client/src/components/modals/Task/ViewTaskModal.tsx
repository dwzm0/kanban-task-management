import React, { useRef, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type ITask } from '../../../types/types'
import { StyledModalContainer, StyledModal, TextL, TextM } from '../../../globalStyle'
import { StyledInputGroupContainer } from '../../styled/InputGroupContainer.styled'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks'
import { updTask, initializeDashboards } from 'src/reducers/dashboardReducer'
import FormWrapper from '../../FormWrapper'
import SubtaskField from '../../SubtaskField'
import Select from '../../Select'

interface ViewTaskModalProps {
  task: ITask
  toggleTaskModal: () => void
}

export interface IFormInput {
  subtasks: [{ title: string, isCompleted: boolean }]
  status: string
}

const ViewTaskModal = ({ task, toggleTaskModal }: ViewTaskModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const [taskMenu, setTaskMenu] = useState<boolean>(false)
  const [currStatus, setCurrStatus] = useState<string>(task?.status)
  const formRef = useRef<HTMLFormElement>(null)

  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)
  const currColumn = selectDashboard?.columns?.find(column => column.tasks?.includes(task))

  const { handleSubmit, register } = useForm<ITask>({ defaultValues: task })

  const toggleTaskMenu = () => {
    setTaskMenu(!taskMenu)
  }

  const onSubmit: SubmitHandler<ITask> = async (data) => {
    data.status = currStatus
    data?.subtasks?.map((subtask) => subtask.isCompleted = !!subtask.isCompleted)
    await dispatch(updTask(selectDashboard._id, currColumn!._id, data))
    await dispatch(initializeDashboards())
  }

  const closeAndSave = async (): Promise<void> => {
    formRef.current?.requestSubmit()
    console.log(formRef.current)
    toggleTaskModal()
  }

  const completedTasks = task?.subtasks?.filter((subtask) => subtask.isCompleted).length
  const totalTasks = task?.subtasks?.length

  return (
    <StyledModalContainer onClick={taskMenu ? toggleTaskModal : closeAndSave}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper onSubmit={handleSubmit(onSubmit)} ref={formRef} title={task.title}
                         menuIcon={true} handleMenuToggle={toggleTaskMenu} taskMenu={taskMenu}
                         task={task} toggleTaskModal={toggleTaskModal}
                         >
                <StyledInputGroupContainer>
                    <TextL>{task?.description}</TextL>
                    <TextM>Subtasks ({completedTasks} of {totalTasks})</TextM>

                    {task.subtasks?.map((subtask, i) => {
                      return <SubtaskField register={register} key={i} arrKey={i}
                                           id={subtask._id} title={subtask.title} completeStatus={subtask.isCompleted} />
                    })}
                    <Select text='Current Status' currStatus={currStatus} setCurrStatus={setCurrStatus} cols={cols} />
                </StyledInputGroupContainer>
            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default ViewTaskModal
