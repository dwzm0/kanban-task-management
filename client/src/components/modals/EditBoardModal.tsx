/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { type FormEvent, useEffect } from 'react'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import { TextM, StyledModalContainer, StyledModal } from '../../globalStyle'
import FormWrapper from '../FormWrapper'
import InputField from '../InputField'
import Input from '../Input'
import Button from '../Button'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { type IBoard, type IColumn, type IColumnWithoutId } from '../../types/types'
import { updBoard } from '../../reducers/dashboardReducer'
import { useImmer } from 'use-immer'
import { ObjectId } from 'bson'

interface CreateBoardProps {
  editBoardModal: boolean
  handleClick: () => void
}

const EditBoardModal = ({ editBoardModal, handleClick }: CreateBoardProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const [cols, setCols] = useImmer<IColumn[]>([])

  useEffect(() => setCols(selectDashboard.columns as IColumn[]), [])

  const handleInputDelete = (id: string) => {
    console.log(cols)
    const newDefaultColState = cols?.filter((col) => col._id !== id)
    console.log(newDefaultColState)
    setCols(newDefaultColState)
  }

  const handleInputAdd = () => {
    const newDefaultColState = [...cols as any[], { name: '', _id: String(new ObjectId()) }]
    setCols(newDefaultColState as unknown as IColumn[])
  }

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const entries = data.entries()
    const name = []
    const columns = []
    for (const [key, value] of entries) {
      if (key === 'Columns') {
        columns.push(value)
      } else if (key === 'Name') {
        name.push(value)
      }
    }

    const formatedColumns: IColumnWithoutId[] = columns.map(col => {
      return { name: col as string }
    })

    const changedCols = cols?.slice().map((col, i) => {
      const changedCol = {
        ...col,
        name: formatedColumns[i].name
      }
      return changedCol
    })

    setCols(changedCols)
    const editBoardObj: IBoard = {
      _id: selectCurrId,
      name: name.join(''),
      columns: changedCols
    }
    console.log(editBoardObj)

    await dispatch(updBoard(editBoardObj))
    handleClick()
  }

  return (
    <>
    {editBoardModal
      ? <StyledModalContainer onClick={handleClick}>
            <StyledModal onClick={(e) => { e.stopPropagation() }}>
                <FormWrapper title="Edit Board" onSubmit={handleOnSubmit} >
                        <StyledInputGroupContainer>

                        <Input label='Name' name='name' type='text'
                               defaultValue={selectDashboard.name}
                               placeholder='e.g Web Design'/>

                            <TextM>Columns</TextM>
                            {cols?.map((col, i) => {
                              return <InputField key={col._id} id={col._id} type='text'
                              name='Columns' defaultValue={col.name} handelInputDelete={handleInputDelete}/>
                            })}
                            <Button sm type='button' variant='secondary' handleClick={handleInputAdd}>
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
