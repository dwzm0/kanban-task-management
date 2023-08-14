import React, { type ReactNode } from 'react'
import StyledButton from './styled/Button.styled'

interface ButtonProps {
  variant?: string
  disabled?: boolean
  children?: ReactNode
  handleClick?: () => void
  type?: 'submit' | 'button' | 'reset' | undefined
  sm?: boolean
  marginTop?: string
}

const Button = ({
  variant,
  disabled,
  children,
  handleClick,
  type,
  sm,
  marginTop
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={type} onClick={handleClick}
    className={variant} disabled={disabled} sm={sm} marginTop={marginTop}>{children}</StyledButton>
  )
}

export default Button
