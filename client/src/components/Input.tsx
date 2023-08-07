/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import { StyledInput } from './styled/Input.styled'
import { TextM } from 'src/globalStyle'

interface InputProps {
  label?: string
  type: string
  name: string
  placeholder?: string
  defaultValue?: string
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  defaultValue
}: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    if (defaultValue) setInputValue(defaultValue)
  }, [])

  const handleChange = (event: any) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
        <StyledInput>
          {label
            ? <label htmlFor={name}>
              <TextM>{label}</TextM>
            </label>
            : null
          }
          <input type={type} value={inputValue}
                 name={name} onChange={handleChange}
                 placeholder={placeholder}/>
        </StyledInput>
  )
}

export default Input
