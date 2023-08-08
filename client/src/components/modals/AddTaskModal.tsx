/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledModalContainer, StyledModal, TextM } from 'src/globalStyle'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import { ObjectId } from 'bson'

import FormWrapper from '../FormWrapper'
import Input from '../Input'
import TextArea from '../TextArea'
import Button from '../Button'
import InputField from '../InputField'
import Select from '../Select'

import { useAppDispatch, useAppSelector } from 'src/hooks/useReduxHooks'
import { crtTask, initializeDashboards } from 'src/reducers/dashboardReducer'
import { type ITask } from 'src/types/types'

interface AddTaskModalProps {
  toggleAddTaskModal: () => void
}

const AddTaskModal = ({ toggleAddTaskModal }: AddTaskModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)
  const [currStatus, setCurrStatus] = useState<string>(cols![0])
  const subtaskPlaceholders = ['e.g. Make coffee', 'e.g. Drink coffee & smile']

  const { handleSubmit, register, control } = useForm<Record<string, unknown>>({
    defaultValues: {
      title: '',
      description: '',
      status: '',
      subtasks: [
        {
          title: '',
          isCompleted: false
        },
        {
          title: '',
          isCompleted: false
        }
      ]
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks' as never
  })

  const onSubmit: SubmitHandler<Record<string, unknown>> = async (data) => {
    data.status = currStatus
    data._id = new ObjectId()
    const task = data
    await dispatch(crtTask(selectCurrId, task as unknown as ITask))
    await dispatch(initializeDashboards())
    toggleAddTaskModal()
  }

  const removeInput = (index: number) => {
    remove(index)
  }

  const appendInput = () => {
    append({
      title: '',
      isCompleted: false
    })
  }

  return (
    <StyledModalContainer onClick={toggleAddTaskModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper title="Add New Task" onSubmit={handleSubmit(onSubmit)}>
              <StyledInputGroupContainer>

                <Input register={register} label='Title' name='title' type='text'
                       placeholder='e.g Take coffee break'
                />
                <TextArea register={register} label='Description' name='description'
                          placeholder={`e.g. It's always good to take a break. This 15 minute break will 
                          recharge the batteries a little.`} rows={7} cols={30}
                />

                <TextM>Subtasks</TextM>
                {fields.map((field, index) => {
                  return <InputField key={field.id} index={index} type='text'
                    placeholder={subtaskPlaceholders[index]}
                    handelInputDelete={removeInput}
                    name={`subtasks.${index}.title`}
                    register={register}
                    />
                })}

              <Button sm type='button' variant='secondary'
                      handleClick={appendInput}>
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
