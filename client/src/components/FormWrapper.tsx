import React, {
  type FormEvent, type ReactNode,
  forwardRef
} from 'react'
import { StyledFormWrapper } from './styled/FormWrapper.styled'
import { HeadingL } from '../globalStyle'
import EditTaskIcon from './icons/EditTaskMenuIcon'
import { type ITask } from 'src/types/types'

interface FromWrapperProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  title?: string
  children?: ReactNode
  event?: React.FormEvent<HTMLFormElement>
  menuIcon?: boolean
  handleMenuToggle?: () => void
  task?: ITask
  taskMenu?: boolean
  toggleTaskModal?: () => void
}

const FormWrapper = forwardRef((
  props: FromWrapperProps,
  ref): JSX.Element => {
  return (
        <StyledFormWrapper ref={ref as React.RefObject<HTMLFormElement>}
                           onSubmit={ (event: React.FormEvent<HTMLFormElement>) => { props?.onSubmit?.(event) }}
                           >
          <fieldset>
            <legend>
              <HeadingL>{props?.title}</HeadingL>
              {props?.menuIcon
                ? <EditTaskIcon handleMenuToggle={props?.handleMenuToggle as () => void}
                task={props?.task as ITask}
                taskMenu={props?.taskMenu}
                toggleTaskModal={props?.toggleTaskModal as () => void}
                />
                : null}
            </legend>
            {props?.children}
          </fieldset>
        </StyledFormWrapper>
  )
})

export default FormWrapper
