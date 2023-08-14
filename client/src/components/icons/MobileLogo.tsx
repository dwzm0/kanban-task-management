import React from 'react'
import { StyledMobileLogo } from '../styled/StyledIcons/MobileLogo.styled'
import mobileLogoImg from '../../assets/logo-mobile.svg'

const MobileLogo = (): JSX.Element => {
  return (
    <StyledMobileLogo>
        <img src={mobileLogoImg}/>
    </StyledMobileLogo>
  )
}

export default MobileLogo
