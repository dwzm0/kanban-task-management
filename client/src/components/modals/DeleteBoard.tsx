import React from 'react'
import { HeadingL, TextL, TextM, FlexRowContainer } from '../../globalStyle'
import Button from '../Button'
import { StyledDeleteBoard } from '../styled/StyledModals/DeleteBoard.styled'

const DeleteBoard = (): JSX.Element => {
  return (
    <StyledDeleteBoard>
        <HeadingL>Delete this board?</HeadingL>
        <TextL>Are you sure you want to delete the THIS BOARD board?
              This action will remove all columns and tasks and cannot be reversed.
        </TextL>
        <FlexRowContainer>
            <Button sm variant='destructive'><TextM>Delete</TextM></Button>
            <Button sm variant='secondary'><TextM>Cancel</TextM></Button>
        </FlexRowContainer>
    </StyledDeleteBoard>
  )
}

export default DeleteBoard
