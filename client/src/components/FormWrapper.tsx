import React, {
  type FormEvent, type ReactNode,
  forwardRef
} from 'react'
import { StyledFormWrapper } from './styled/FormWrapper.styled'
import { HeadingL } from '../globalStyle'
import EditBoardMenuIcon from './icons/EditBoardMenuIcon'

interface FromWrapperProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  title?: string
  children?: ReactNode
  event?: React.FormEvent<HTMLFormElement>
  menuIcon?: boolean
  handleMenuToggle?: () => void
}

const FormWrapper = forwardRef((
  props: FromWrapperProps,
  ref): JSX.Element => {
  return (
        <StyledFormWrapper ref={ref as React.RefObject<HTMLFormElement>} onSubmit={ event => { props?.onSubmit?.(event) } }>
          <fieldset>
            <legend>
              <HeadingL>{props?.title}</HeadingL>
              {props?.menuIcon
                ? <EditBoardMenuIcon handleMenuToggle={props?.handleMenuToggle as () => void}/>
                : null}
            </legend>
            {props?.children}
          </fieldset>
        </StyledFormWrapper>
  )
})

export default FormWrapper
