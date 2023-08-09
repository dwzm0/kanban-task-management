import React, { useContext } from 'react'
import { StyledLogo } from './styled/StyledIcons/Logo.styled'
import darkLogoImg from '../assets/logo-dark.svg'
import lightLogoImg from '../assets/logo-light.svg'
import { ThemeCurrValueContext } from '../contexts/themeContext'

const Logo = (): JSX.Element => {
  const themeContext = useContext(ThemeCurrValueContext)

  return (
    <StyledLogo>
        <img src={themeContext?.theme === 'dark' ? lightLogoImg : darkLogoImg}/>
    </StyledLogo>
  )
}

export default Logo
