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

export const lightTheme = {
  sidebarColour: '#ffffff'
}

export const darkTheme = {
  sidebarColour: '#2b2c37'
}

export default GlobalStyle
