import React from 'react'
import { StyledChevron } from '../styled/StyledIcons/Chevron.styled'
import chevronDownImg from '../../assets/icon-chevron-down.svg'

const ChevronIconDown = (): JSX.Element => {
  return (
    <StyledChevron>
      <img src={chevronDownImg}/>
    </StyledChevron>
  )
}

export default ChevronIconDown
