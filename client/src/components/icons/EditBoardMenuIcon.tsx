import React, { type MouseEventHandler } from 'react'
import img from '../../assets/icon-vertical-ellipsis.svg'

interface EditBoardMenuIconProps {
  handleBoardMenu: MouseEventHandler<HTMLDivElement>
}

const EditBoardMenuIcon = ({ handleBoardMenu }: EditBoardMenuIconProps): JSX.Element => {
  return (
        <div style={{ paddingLeft: '1.5rem', height: '18px', cursor: 'pointer' }} onClick={handleBoardMenu}>
            <img style={{ height: '100%', width: '100%' }} src={img} />
        </div>
  )
}

export default EditBoardMenuIcon
