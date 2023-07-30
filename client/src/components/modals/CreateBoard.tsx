/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type FormEvent, useState } from 'react'
import { StyledModalContainer, StyledCreateBoard } from '../styled/CreateBoard.styled'
import { StyledInputGroupContainer } from '../styled/InputGroupContainer.styled'
import FormWrapper from '../FormWrapper'
import InputField from '../InputField'
import Input from '../Input'
import Button from '../Button'
import { TextM } from '../../globalStyle'

interface CreateBoardProps {
  addBoardModal: boolean
}

const CreateBoard = ({ addBoardModal }: CreateBoardProps): JSX.Element => {
  const [defaultCol, setDefaultCol] = useState<string[]>(['Todo', 'Doing'])

  const handleInputDelete = (index: number) => {
    console.log(index)
    const newDefaultColState = defaultCol.filter((_col, i) => i !== index)
    console.log(newDefaultColState)
    setDefaultCol(newDefaultColState)
  }

  const handleInputAdd = () => {
    const newDefaultColState = [...defaultCol, '']
    setDefaultCol(newDefaultColState)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    const addBoardObj = {
      name: name.join(''),
      columns: formatedColumns
    }
    console.log(addBoardObj)
  }

  return (
    <>
    {addBoardModal
      ? <StyledModalContainer>
            <StyledCreateBoard>
                <FormWrapper title="Add New Board" onSubmit={handleOnSubmit} >
                        <StyledInputGroupContainer>
                            <TextM>Name</TextM>
                            <Input inputType='text' inputName='Name' placeholder='e.g Web Design'/>
                            <TextM>Columns</TextM>
                            {defaultCol.map((col, i) => {
                              return <InputField key={i} index={i} inputType='text' inputName='Columns' defaultValue={col} handelInputDelete={handleInputDelete}/>
                            })}
                            <Button sm type='button' variant='secondary' handleClick={handleInputAdd}>
                                <TextM>+ Add New Column</TextM>
                            </Button>
                        </StyledInputGroupContainer>
                    <Button sm type='submit' variant='primary'>
                        <TextM>Create New Bord</TextM>
                    </Button>
                </FormWrapper>
            </StyledCreateBoard>
        </StyledModalContainer>
      : null
    }
    </>
  )
}

export default CreateBoard