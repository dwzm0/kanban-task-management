/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, {
  type MouseEventHandler, type FormEvent, type ReactNode,
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
  handleBoardMenu?: MouseEventHandler<HTMLDivElement>
}

const FormWrapper = forwardRef((
  props: FromWrapperProps,
  ref): JSX.Element => {
  return (
        <StyledFormWrapper ref={ref as React.RefObject<HTMLFormElement>} onSubmit={ event => { props?.onSubmit?.(event) } }>
          <fieldset>
            <legend>
              <HeadingL>{props?.title}</HeadingL>
              {props?.menuIcon ? <EditBoardMenuIcon handleBoardMenu={props?.handleBoardMenu as MouseEventHandler<HTMLDivElement>}/> : null}
            </legend>
            {props?.children}
          </fieldset>
        </StyledFormWrapper>
  )
})

export default FormWrapper
