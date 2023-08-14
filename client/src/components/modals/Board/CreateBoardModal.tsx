import React from 'react'
import { useForm, type SubmitHandler, useFieldArray, type FieldError } from 'react-hook-form'

import { StyledInputGroupContainer } from '../../styled/InputGroupContainer.styled'
import { TextM, StyledModalContainer, StyledModal } from '../../../globalStyle'
import FormWrapper from '../../FormWrapper'
import InputField from '../../InputField'
import Input from '../../Input'
import Button from '../../Button'

import { useAppDispatch } from '../../../hooks/useReduxHooks'
import { createBoard } from '../../../reducers/dashboardReducer'
import { type IBoardWithoutId } from '../../../types/types'

interface CreateBoardProps {
  addBoardModal: boolean
  handleClick: () => void
}

const CreateBoardModal = ({ addBoardModal, handleClick }: CreateBoardProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, control, formState: { errors } } = useForm<Record<string, unknown>>({
    defaultValues: {
      name: '',
      columns: [
        {
          name: 'Todo'
        },
        {
          name: 'Doing'
        }
      ]

    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns' as never
  })

  const onSubmit: SubmitHandler<Record<string, unknown>> = async (data) => {
    await dispatch(createBoard(data as IBoardWithoutId))
    handleClick()
  }

  const removeInput = (index: number) => {
    remove(index)
  }

  const appendInput = () => {
    append({
      name: ''
    })
  }

  return (
    <>
    {addBoardModal
      ? <StyledModalContainer onClick={handleClick}>
            <StyledModal onClick={(e) => { e.stopPropagation() }}>
                <FormWrapper title="Add New Board" onSubmit={handleSubmit(onSubmit)} >
                        <StyledInputGroupContainer>

                            <Input register={register} label='Name' name='name' type='text'
                                   placeholder='e.g Web Design'
                                   rules={{
                                     required: 'Can\'t be empty',
                                     minLength: {
                                       value: 3,
                                       message: 'To short'
                                     }
                                   }}
                                   errors={errors as Partial<Record<string, FieldError>>}
                                   />
                            <TextM>Columns</TextM>
                            {fields.map((field, index) => {
                              return <InputField key={field.id} index={index} type='text'
                                handelInputDelete={removeInput}
                                name={`columns.${index}.name`}
                                register={register}
                                rules={{ required: 'Can\'t be empty' }}
                                errors={errors as Partial<Record<string, FieldError>>}
                                />
                            })}

                            <Button sm type='button' variant='secondary' handleClick={appendInput}>
                                <TextM>+ Add New Column</TextM>
                            </Button>
                        </StyledInputGroupContainer>
                    <Button sm marginTop="1.5rem" type='submit' variant='primary'>
                        <TextM>Create New Bord</TextM>
                    </Button>
                </FormWrapper>
            </StyledModal>
        </StyledModalContainer>
      : null
    }
    </>
  )
}

export default CreateBoardModal
