/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledBoardMenu } from '../../styled/StyledModals/MenuModal.styled'
import { TextL } from '../../../globalStyle'
import EditBoardModal from './EditBoardModal'
import DeleteModal from './DeleteModal'

interface BoardMenuProps {
  toggleBoardMenu: () => void
}

const BoardMenuModal = ({ toggleBoardMenu }: BoardMenuProps): JSX.Element => {
  const [deleteBoard, setDeleteBoard] = useState<boolean>(false)
  const [editBoard, setEditBoard] = useState<boolean>(false)

  const handelCancelDelete = () => {
    setDeleteBoard(!deleteBoard)
    toggleBoardMenu()
  }

  const handelEdit = () => {
    setEditBoard(!editBoard)
    toggleBoardMenu()
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
