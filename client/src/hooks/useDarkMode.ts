/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

export const useDarkTheme = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return [theme, toggleTheme] as const
}
