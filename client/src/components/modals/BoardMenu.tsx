import React from 'react'
import { StyledBoardMenu } from '../styled/StyledModals/BoardMenu.styled'
import { TextL } from '../../globalStyle'

const BoardMenu = (): JSX.Element => {
  return (
    <StyledBoardMenu>
        <TextL>Edit Board</TextL>
        <TextL>Delete Board</TextL>
    </StyledBoardMenu>
  )
}

export default BoardMenu
