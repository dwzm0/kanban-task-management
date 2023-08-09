import React from 'react'
import { HeadingL, TextL, TextM, FlexRowContainer, StyledModalContainer } from '../../../globalStyle'
import Button from '../../Button'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks'
import { StyledDeleteModal } from '../../styled/StyledModals/DeleteModal.styled'
import { type ITask } from 'src/types/types'
import { delTask } from 'src/reducers/dashboardReducer'

interface DeleteTaskModalProps {
  task: ITask
  handleCancel: () => void
}

const DeleteTaskModal = ({ task, handleCancel }: DeleteTaskModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboard = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0])
  const column = selectDashboard.columns?.find((col) => col?.tasks?.includes(task))
  const handleDelete = async () => {
    await dispatch(delTask(selectDashboard._id, column!._id, task._id))
    handleCancel()
  }

  return (
    <StyledModalContainer onClick={handleCancel}>
        <StyledDeleteModal onClick={(e) => { e.stopPropagation() }}>
            <HeadingL>Delete this board?</HeadingL>
            <TextL>Are you sure you want to delete the {task?.title} task?
                This action will remove all columns and tasks and cannot be reversed.
            </TextL>
            <FlexRowContainer>

                <Button sm variant='destructive'
                        handleClick={handleDelete}>
                        <TextM>Delete</TextM>
                </Button>

                <Button sm variant='secondary'
                        handleClick={handleCancel}>
                        <TextM>Cancel</TextM>
                </Button>

            </FlexRowContainer>
        </StyledDeleteModal>
    </StyledModalContainer>
  )
}

export default DeleteTaskModal
