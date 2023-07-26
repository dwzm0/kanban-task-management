import React, { type ReactNode } from 'react'
import StyledButton from './styled/Button.styled'

interface ButtonProps {
  variant?: string
  disabled?: boolean
  children?: ReactNode
}

const Button = ({ variant, disabled, children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton className={variant} disabled={disabled}>{children}</StyledButton>
  )
}

export default Button
