import React from 'react'
import { StyledEditMenuIcon } from '../styled/StyledIcons/EditMenuIcon.styled'
import img from '../../assets/icon-vertical-ellipsis.svg'

interface EditBoardMenuIconProps {
  handleMenuToggle: () => void
}

const EditMenuIcon = ({ handleMenuToggle }: EditBoardMenuIconProps): JSX.Element => {
  return (
    <>
        <StyledEditMenuIcon onClick={handleMenuToggle}>
            <img style={{ height: '100%', width: '100%' }} src={img} />
        </StyledEditMenuIcon>
    </>
  )
}

export default EditMenuIcon
