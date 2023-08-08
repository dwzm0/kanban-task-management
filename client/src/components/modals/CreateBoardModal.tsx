/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type FormEvent, useState } from 'react'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import { TextM, StyledModalContainer, StyledModal } from '../../globalStyle'
import FormWrapper from '../FormWrapper'
/* import InputField from '../InputField' */
import Input from '../Input'
import Button from '../Button'
import { useAppDispatch } from '../../hooks/useReduxHooks'
import { createBoard } from '../../reducers/dashboardReducer'
import { type IBoardWithoutId, type IColumn } from '../../types/types'
import { ObjectId } from 'bson'

interface CreateBoardProps {
  addBoardModal: boolean
  handleClick: () => void
}

const CreateBoardModal = ({ addBoardModal, handleClick }: CreateBoardProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const [defaultCol, setDefaultCol] = useState<IColumn[]>([{ name: 'Todo', _id: String(new ObjectId()) }, { name: 'Doing', _id: String(new ObjectId()) }])

  /*  const handleInputDelete = (id: string) => {
    const newDefaultColState = defaultCol.filter((col) => col._id !== id)
    setDefaultCol(newDefaultColState)
  } */

  const handleInputAdd = () => {
    const newDefaultColState = [...defaultCol, { name: '', _id: String(new ObjectId()) }]
    setDefaultCol(newDefaultColState)
  }

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const entries = data.entries()
    const name = []
    const columns = []
    for (const [key, value] of entries) {
      console.log(key)
      if (key === 'Columns') {
        columns.push(value)
      } else if (key === 'Name') {
        name.push(value)
      }
    }

    const formatedColumns = columns.map(col => {
      return { name: col }
    })

    const addBoardObj: IBoardWithoutId = {
      name: name.join(''),
      columns: formatedColumns as IColumn[]
    }

    await dispatch(createBoard(addBoardObj))
    handleClick()
  }

  return (
    <>
    {addBoardModal
      ? <StyledModalContainer onClick={handleClick}>
            <StyledModal onClick={(e) => { e.stopPropagation() }}>
                <FormWrapper title="Add New Board" onSubmit={handleOnSubmit} >
                        <StyledInputGroupContainer>

                            <Input label='Name' name='name' type='text'
                                   placeholder='e.g Web Design'/>

                            <TextM>Columns</TextM>
                         {/*    {defaultCol.map((col) => {
                              return <InputField key={col._id} id={col._id} type='text'
                              name='Columns' defaultValue={col.name}
                              handelInputDelete={handleInputDelete}
                              />
                            })} */}

                            <Button sm type='button' variant='secondary' handleClick={handleInputAdd}>
                                <TextM>+ Add New Column</TextM>
                            </Button>
                        </StyledInputGroupContainer>
                    <Button sm type='submit' variant='primary'>
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
