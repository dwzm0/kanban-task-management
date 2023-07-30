import React, { type FormEvent, type ReactNode } from 'react'
import { StyledFormWrapper } from './styled/FormWrapper.styled'
import { HeadingL } from '../globalStyle'

interface FromWrapperProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  title?: string
  children?: ReactNode
  event?: React.FormEvent<HTMLFormElement>
}

const FormWrapper = (props: FromWrapperProps): JSX.Element => {
  return (
        <StyledFormWrapper onSubmit={ event => { props?.onSubmit?.(event) } }>
          <fieldset>
            <legend>
              <HeadingL>{props?.title}</HeadingL>
            </legend>
            {props?.children}
          </fieldset>
        </StyledFormWrapper>
  )
}

export default FormWrapper
