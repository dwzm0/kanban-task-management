import { createContext } from 'react'
import { type ThemeProps } from '../types/types'

export const ThemeCurrValueContext = createContext<ThemeProps | null>(null)
