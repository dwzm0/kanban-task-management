/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledSubTaskField, StyledCheckMark, StyledCheckMarkInput, StyledSubTaskLabel } from './styled/SubtaskField.styled'
import { TextM } from 'src/globalStyle'
import { type UseFormRegister } from 'react-hook-form'
import { type ITask } from 'src/types/types'

interface SubtaskFieldProps {
  title: string
  completeStatus: boolean
  id: string
  register: UseFormRegister<ITask>
  arrKey: number
}

const SubtaskField = ({
  title,
  completeStatus,
  id,
  register,
  arrKey
}: SubtaskFieldProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completeStatus)

  const handelOnChange = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <StyledSubTaskField>
        <StyledCheckMarkInput
         {...register(`subtasks.${arrKey}.isCompleted`)}
         type='checkbox' id={id} checked={isCompleted} onChange={handelOnChange}
         value={`${isCompleted}`}
          />
        <StyledSubTaskLabel htmlFor={id}>
            <StyledCheckMark />
            <TextM>{title}</TextM>
        </StyledSubTaskLabel>
    </StyledSubTaskField>
  )
}

export default SubtaskField
