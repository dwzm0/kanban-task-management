/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect, type ChangeEventHandler } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('true')

  const setMode = (mode: any) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = () => {
    theme === 'true' ? setMode('false') : setMode('true')
    console.log(theme)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setTheme(localTheme) : setMode('false')
  }, [])

  return [theme, toggleTheme]
}
