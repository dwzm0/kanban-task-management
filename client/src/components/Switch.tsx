/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useContext } from 'react'
import { ThemeCurrValueContext } from '../contexts/themeContext'
import { StyledSwitch } from './styled/Switch.styled'

const Switch = (): JSX.Element => {
  const themeContext = useContext(ThemeCurrValueContext)
  console.log(themeContext)
  const isDark = themeContext?.theme === 'dark'
  const [isToggled, setIsToggled] = useState(isDark)

  const onToggle = () => {
    setIsToggled(!isDark)
    themeContext?.toggleTheme()
  }

  return (
    <>
        <StyledSwitch>
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle}/>
                <span className="switch" />
            </label>
        </StyledSwitch>
    </>
  )
}

export default Switch
