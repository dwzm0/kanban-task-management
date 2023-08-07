import React from 'react'
import { TextM } from 'src/globalStyle'
import { StyledTextArea } from './styled/TextArea.styled'

interface TextAreaProps {
  label: string
  name: string
  rows: number
  cols: number
  placeholder: string
}

const TextArea = ({
  label,
  name,
  rows,
  cols,
  placeholder
}: TextAreaProps): JSX.Element => {
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
                  />
    </StyledTextArea>
  )
}

export default TextArea
