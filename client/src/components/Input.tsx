/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import { StyledInput } from './styled/Input.styled'

interface InputProps {
  inputType: string
  placeholder?: string
  defaultValue?: string
  inputName: string
}

const Input = ({ inputType, placeholder, defaultValue, inputName }: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (defaultValue) setInputValue(defaultValue)
  }, [])

  const handleChange = (event: any) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
        <StyledInput type={inputType} value={inputValue} name={inputName} onChange={handleChange}
                    placeholder={placeholder}
        />
  )
}

export default Input
