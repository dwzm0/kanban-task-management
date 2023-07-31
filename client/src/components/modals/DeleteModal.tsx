/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { HeadingL, TextL, TextM, FlexRowContainer, StyledModalContainer } from '../../globalStyle'
import Button from '../Button'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { StyledDeleteModal } from '../styled/StyledModals/DeleteModal.styled'
import { delBoard } from '../../reducers/dashboardReducer'

interface DeleteModalProps {
  handleCancel: () => void
}

const DeleteModal = ({ handleCancel }: DeleteModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectCurrId = useAppSelector((state) => state.currId)
  console.log(selectCurrId)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)

  const handleDelete = async (id: string) => {
    await dispatch(delBoard(id))
    handleCancel()
  }

  return (
    <StyledModalContainer onClick={handleCancel}>
        <StyledDeleteModal onClick={(e) => { e.stopPropagation() }}>
            <HeadingL>Delete this board?</HeadingL>
            <TextL>Are you sure you want to delete the {selectDashboardName} board?
                This action will remove all columns and tasks and cannot be reversed.
            </TextL>
            <FlexRowContainer>
                <Button sm variant='destructive' handleClick={async () => { await handleDelete(selectCurrId) }}><TextM>Delete</TextM></Button>
                <Button sm variant='secondary' handleClick={handleCancel}><TextM>Cancel</TextM></Button>
            </FlexRowContainer>
        </StyledDeleteModal>
    </StyledModalContainer>
  )
}

export default DeleteModal
