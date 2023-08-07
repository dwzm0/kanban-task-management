/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React from 'react'
import { TextM } from 'src/globalStyle'
import { StyledTextArea } from './styled/TextArea.styled'
import { type UseFormRegister } from 'react-hook-form/dist/types/form'
import { type Path, type FieldValues } from 'react-hook-form'

interface TextAreaProps {
  label: string
  name: string
  rows: number
  cols: number
  placeholder: string
}

export type FormTextAreaProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  register?: UseFormRegister<TFormValues>
} & Omit<TextAreaProps, 'name'>

const TextArea = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  rows,
  cols,
  placeholder,
  register
}: FormTextAreaProps<TFormValues>): JSX.Element => {
  return (
    <StyledTextArea>
        <label htmlFor={name}>
            <TextM>{label}</TextM>
        </label>
        <textarea name={name}
                  id={name}
                  rows={rows}
                  cols={cols}
                  placeholder={placeholder}
                  {...((register != null) && register(name))}
                  />
    </StyledTextArea>
  )
}

export default TextArea
