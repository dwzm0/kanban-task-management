/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledBoardMenu } from '../styled/StyledModals/BoardMenu.styled'
import { TextL } from '../../globalStyle'
import EditBoardModal from './EditBoardModal'
import DeleteModal from './DeleteModal'

interface BoardMenuProps {
  boardMenu: boolean
  setBoardMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const BoardMenuModal = ({ boardMenu, setBoardMenu }: BoardMenuProps): JSX.Element => {
  const [deleteBoard, setDeleteBoard] = useState<boolean>(false)
  const [editBoard, setEditBoard] = useState<boolean>(false)

  const handelCancelDelete = () => {
    setDeleteBoard(!deleteBoard)
    setBoardMenu(!boardMenu)
  }

  const handelEdit = () => {
    setEditBoard(!editBoard)
    setBoardMenu(!boardMenu)
  }

  return (
    <>
      <StyledBoardMenu>
          <TextL onClick={() => { setEditBoard(!editBoard) }}>Edit Board</TextL>
          <TextL onClick={() => { setDeleteBoard(!deleteBoard) }}>Delete Board</TextL>
      </StyledBoardMenu>
      {deleteBoard ? <DeleteModal handleCancel={handelCancelDelete}/> : null}
      {editBoard ? <EditBoardModal editBoardModal={editBoard} handleClick={handelEdit}/> : null}
    </>
  )
}

export default BoardMenuModal
