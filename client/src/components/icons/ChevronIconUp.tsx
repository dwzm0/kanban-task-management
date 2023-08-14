import React from 'react'
import { StyledChevron } from '../styled/StyledIcons/Chevron.styled'
import chevronUpImg from '../../assets/icon-chevron-up.svg'

const ChevronIconUp = (): JSX.Element => {
  return (
    <StyledChevron>
      <img src={chevronUpImg}/>
    </StyledChevron>
  )
}

export default ChevronIconUp
