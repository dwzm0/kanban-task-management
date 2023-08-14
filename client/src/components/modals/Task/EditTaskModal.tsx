import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { StyledModalContainer, StyledModal, TextM } from 'src/globalStyle'
import { StyledInputGroupContainer } from '../../styled/InputGroupContainer.styled'
import { useForm, type SubmitHandler, useFieldArray, type FieldError } from 'react-hook-form'
import FormWrapper from '../../FormWrapper'

import Input from '../../Input'
import TextArea from '../../TextArea'
import Button from '../../Button'
import InputField from '../../InputField'
import Select from '../../Select'
import { type ITask } from 'src/types/types'
import { useAppSelector, useAppDispatch } from 'src/hooks/useReduxHooks'
import { initializeDashboards, updTask } from 'src/reducers/dashboardReducer'

interface EditTaskModalProps {
  task: ITask
  toggleEditTask: () => void
}

const EditTaskModal = ({ task, toggleEditTask }: EditTaskModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const cols = selectDashboard?.columns?.map((cols) => cols.name)
  const currColumn = selectDashboard?.columns?.find(column => column.tasks?.includes(task))
  const [currStatus, setCurrStatus] = useState<string>(task.status)

  const { handleSubmit, register, control, formState: { errors } } = useForm<Record<string, unknown>>({
    defaultValues: {
      ...task
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks' as never
  })

  const onSubmit: SubmitHandler<Record<string, unknown>> = async (data) => {
    data.status = currStatus
    toggleEditTask()
    await dispatch(updTask(selectDashboard._id, currColumn!._id, data as unknown as ITask))
    await dispatch(initializeDashboards())
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
    <>
    {createPortal(
       <StyledModalContainer onClick={toggleEditTask}>
       <StyledModal onClick={(e) => { e.stopPropagation() }}>
          <FormWrapper title="Edit Task" onSubmit={handleSubmit(onSubmit)}>
              <StyledInputGroupContainer>

                  <Input register={register} label='Title' name='title' type='text'
                        placeholder='e.g Take coffee break'
                        errors={errors as Partial<Record<string, FieldError>>}
                        rules={{ required: 'Can\'t be empty' }}
                  />

                  <TextArea register={register} label='Description' name='description'
                            placeholder={`e.g. It's always good to take a break. This 15 minute break will 
                            recharge the batteries a little.`} rows={7} cols={30}
                  />

                  <TextM>Subtasks</TextM>
                  {fields.map((field, index) => {
                    return <InputField key={field.id} index={index} type='text'
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

              <Button sm marginTop="1.5rem" type='submit' variant='primary'>
                          <TextM>Save Changes</TextM>
              </Button>
          </FormWrapper>
       </StyledModal>
    </StyledModalContainer>,
       document.getElementById('modal') as Element | DocumentFragment
    )}
    </>
  )
}

export default EditTaskModal
