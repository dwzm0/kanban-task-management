import React from 'react'
import Button from 'src/components/Button'
import FormWrapper from 'src/components/FormWrapper'
import Input from 'src/components/Input'
import { StyledInputGroupContainer } from 'src/components/styled/InputGroupContainer.styled'
import { StyledModal, StyledModalContainer, TextM } from 'src/globalStyle'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks'
import { ObjectId } from 'bson'
import { type IBoard, type IColumn } from 'src/types/types'
import { updBoard } from 'src/reducers/dashboardReducer'

interface AddNewColumnModalProps {
  toggleColumnModal: () => void
}

const AddNewColumnModal = ({ toggleColumnModal }: AddNewColumnModalProps) => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])

  const { handleSubmit, register } = useForm<Record<string, unknown>>({
    defaultValues: {
      column: ''
    }
  })

  const onSubmit: SubmitHandler<Record<string, unknown>> = async (data) => {
    const newCol: IColumn = { _id: String(new ObjectId()), name: data.column as string }
    const board: IBoard = Object.assign({}, selectDashboard)
    board.columns = [...board.columns as IColumn[], newCol]
    await dispatch(updBoard(board))
    toggleColumnModal()
  }
  return (
    <StyledModalContainer onClick={toggleColumnModal}>
        <StyledModal onClick={(e) => { e.stopPropagation() }}>
            <FormWrapper title="Add New Column" onSubmit={handleSubmit(onSubmit)} >
                <StyledInputGroupContainer>

                    <Input register={register} label='Column' name='column' type='text'
                                    placeholder='Some useful name'/>

                </StyledInputGroupContainer>

                    <Button sm type='submit' variant='primary'>
                        <TextM>Add new column</TextM>
                    </Button>

            </FormWrapper>
        </StyledModal>
    </StyledModalContainer>
  )
}

export default AddNewColumnModal
