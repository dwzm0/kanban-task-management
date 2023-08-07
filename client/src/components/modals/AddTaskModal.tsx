/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledModalContainer, StyledModal, TextM } from 'src/globalStyle'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import { useForm, type SubmitHandler } from 'react-hook-form'

import FormWrapper from '../FormWrapper'
import Input from '../Input'
import TextArea from '../TextArea'
import Button from '../Button'
import InputField from '../InputField'
import Select from '../Select'

import { type ISubTask } from 'src/types/types'
import { ObjectId } from 'bson'
import { useAppSelector } from 'src/hooks/useReduxHooks'

interface AddTaskModalProps {
  toggleAddTaskModal: () => void
}

const AddTaskModal = ({ toggleAddTaskModal }: AddTaskModalProps): JSX.Element => {
  const [defaultSubTask, setDefaultSubTask] = useState<ISubTask[]>(
    [
      { title: '', isCompleted: false, _id: String(new ObjectId()) },
      { title: '', isCompleted: false, _id: String(new ObjectId()) }]
  )
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)
  const [currStatus, setCurrStatus] = useState<string>(cols![0])
  const subtaskPlaceholders = ['e.g. Make coffee', 'e.g. Drink coffee & smile']

  const { handleSubmit, register } = useForm<Record<string, unknown>>({})
  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    console.log(data)
    toggleAddTaskModal()
  }

  const handleInputDelete = (id: string) => {
    const newDefaultSubTaskState = defaultSubTask.filter((subtask) => subtask._id !== id)
    setDefaultSubTask(newDefaultSubTaskState)
  }

  const handleInputAdd = () => {
    const newDefaultSubTaskState = [...defaultSubTask, { title: '', isCompleted: false, _id: String(new ObjectId()) }]
    setDefaultSubTask(newDefaultSubTaskState)
  }

  return (
    <StyledModalContainer onClick={toggleAddTaskModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper title="Add New Task" onSubmit={handleSubmit(onSubmit)}>
              <StyledInputGroupContainer>
                <Input {...register('title')} label='Title' name='title' type='text'
                       placeholder='e.g Take coffee break'
                />
                <TextArea register={register} label='Description' name='description'
                          placeholder={`e.g. It's always good to take a break. This 15 minute break will 
                          recharge the batteries a little.`} rows={7} cols={30}
                />
                <TextM>Subtasks</TextM>
                {defaultSubTask.map((subtask, i) => {
                  return <InputField key={subtask._id} id={subtask._id} type='text'
                  name='Subtask' placeholder={subtaskPlaceholders[i]}
                  handelInputDelete={handleInputDelete}
                  />
                })}

              <Button sm type='button' variant='secondary'
                      handleClick={handleInputAdd}>
                    <TextM>+ Add New Subtask</TextM>
              </Button>

              <Select text='Status' currStatus={currStatus} setCurrStatus={setCurrStatus} cols={cols}/>

              </StyledInputGroupContainer>

                <Button sm type='submit' variant='primary'>
                          <TextM>Create Task</TextM>
                </Button>
            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default AddTaskModal
