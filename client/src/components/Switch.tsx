import React from 'react'
import { StyledSwitch } from './styled/Switch.styled'
import { useDarkMode } from '../hooks/useDarkMode'

const Switch = (): JSX.Element => {
  const [theme, toggleTheme] = useDarkMode()
  console.log(theme)

  return (
    <>
        <StyledSwitch>
            <label className="toggle-switch">
                <input type="checkbox" onChange={toggleTheme as React.ChangeEventHandler<HTMLInputElement>}/>
                <span className="switch" />
            </label>
        </StyledSwitch>
    </>
  )
}

export default Switch
