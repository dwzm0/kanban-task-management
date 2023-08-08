/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import { TextM, StyledModalContainer, StyledModal } from '../../globalStyle'
import FormWrapper from '../FormWrapper'
import InputField from '../InputField'
import Input from '../Input'
import Button from '../Button'

import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { updBoard } from '../../reducers/dashboardReducer'
import { type IBoard } from 'src/types/types'

interface CreateBoardProps {
  editBoardModal: boolean
  handleClick: () => void
}

const EditBoardModal = ({ editBoardModal, handleClick }: CreateBoardProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])

  const { handleSubmit, register, control } = useForm<Record<string, unknown>>({
    defaultValues: {
      ...selectDashboard
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns' as never
  })

  const removeInput = (index: number) => {
    remove(index)
  }

  const appendInput = () => {
    append({
      name: ''
    })
  }

  const onSubmit: SubmitHandler<Record<string, unknown>> = async (data) => {
    await dispatch(updBoard(data as unknown as IBoard))
    handleClick()
  }

  return (
    <>
    {editBoardModal
      ? <StyledModalContainer onClick={handleClick}>
            <StyledModal onClick={(e) => { e.stopPropagation() }}>
                <FormWrapper title="Edit Board" onSubmit={handleSubmit(onSubmit)} >
                        <StyledInputGroupContainer>

                        <Input register={register} label='Name' name='name' type='text'
                               placeholder='e.g Web Design'/>

                            <TextM>Columns</TextM>
                            {fields.map((field, index) => {
                              return <InputField key={field.id} index={index} type='text'
                                handelInputDelete={removeInput}
                                name={`columns.${index}.name`}
                                register={register}
                                />
                            })}
                            <Button sm type='button' variant='secondary' handleClick={appendInput}>
                                <TextM>+ Add New Column</TextM>
                            </Button>
                        </StyledInputGroupContainer>
                    <Button sm type='submit' variant='primary'>
                        <TextM>Save Changes</TextM>
                    </Button>
                </FormWrapper>
            </StyledModal>
        </StyledModalContainer>
      : null
    }
    </>
  )
}

export default EditBoardModal
