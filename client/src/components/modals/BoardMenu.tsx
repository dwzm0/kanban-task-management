import React, { useState } from 'react'
import { StyledBoardMenu } from '../styled/StyledModals/BoardMenu.styled'
import { TextL } from '../../globalStyle'
import DeleteBoard from './DeleteModal'

const BoardMenu = (): JSX.Element => {
  const [deleteBoard, setDeleteBoard] = useState<boolean>(false)

  return (
    <>
      <StyledBoardMenu>
          <TextL>Edit Board</TextL>
          <TextL onClick={() => { setDeleteBoard(!deleteBoard) }}>Delete Board</TextL>
      </StyledBoardMenu>
    {deleteBoard ? <DeleteBoard handleCancel={() => { setDeleteBoard(!deleteBoard) }}/> : null}
    </>
  )
}

export default BoardMenu
