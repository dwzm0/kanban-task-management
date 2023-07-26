import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
 } 
`

export const HeadingXL = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.875rem;
`
export const HeadingL = styled.h2`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.4375rem;
`
export const HeadingM = styled.h3`
  font-weight: bold;
  font-size: .9375rem;
  line-height: 1.1875rem;
`
export const HeadingS = styled.h4`
  font-weight: bold;
  font-size: .75rem;
  line-height: .9375rem;
  letter-spacing: 2.4px;
`
export const TextL = styled.p`
  font-weight: 500;
  font-size: .8125rem;
  line-height: 1.4375rem;
`
export const TextM = styled.p`
  font-weight: bold;
  font-size: .75rem;
  line-height: .9375rem;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const lightTheme = {
  sidebarColour: '#ffffff',
  headerColour: '#ffffff',
  mainColour: '#E4EBFA',
  newColumn: '#828FA3',
  boardTitleText: '#000112',
  taskBg: '#ffffff',
  taskHeaderText: '#000112',
  switchBg: '#F4F7FD',
  lines: '#E4EBFA'
}

export const darkTheme = {
  sidebarColour: '#2b2c37',
  headerColour: '#2b2c37',
  mainColour: '#2B2C37',
  newColumn: '#2B2C37',
  boardTitleText: '#ffffff',
  taskBg: '#000112',
  taskHeaderText: '#ffffff',
  switchBg: '#20212C',
  lines: '#3E3F4E'
}

export default GlobalStyle
