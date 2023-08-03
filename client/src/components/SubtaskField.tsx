/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledSubTaskField, StyledCheckMark, StyledCheckMarkInput, StyledSubTaskLabel } from './styled/SubtaskField.styled'
import { TextM } from 'src/globalStyle'

interface SubtaskFieldProps {
  title: string
  completeStatus: boolean
  id: string
}

const SubtaskField = ({ title, completeStatus, id }: SubtaskFieldProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completeStatus)

  const handelOnChange = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <StyledSubTaskField>
        <StyledCheckMarkInput type='checkbox' id={id} checked={isCompleted} onChange={handelOnChange} />
        <StyledSubTaskLabel htmlFor={id}>
            <StyledCheckMark />
            <TextM>{title}</TextM>
        </StyledSubTaskLabel>
    </StyledSubTaskField>
  )
}

export default SubtaskField
