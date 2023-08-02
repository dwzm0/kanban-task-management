/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createGlobalStyle, css, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.3s linear;
 } 

 body {
  background-color: ${props => props.theme.bodyColour};
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
export const HeadingS = styled.h2`
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
export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexColContainer = styled.div`
  display : flex;
  flex-direction: column;
`
export const FlexRow = css`
  display: flex;
  flex-direction: row;
`
export const FlexCol = css`
  display : flex;
  flex-direction: column;
`
export const FlexCenter = css`
  align-items: center;
  justify-content: center;
`
export const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    ${FlexCenter}
    background-color: #828FA340;
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
`
export const StyledModal = styled.div`
    ${FlexCol}
    width: 480px;
    height: min-content;
    padding: 2rem;
    background-color: ${props => props.theme.modalBg};
`
export const lightTheme = {
  bodyColour: 'var(--white)',
  sidebarColour: 'var(--white)',
  headerColour: 'var(--white)',
  mainColour: 'var(--light-grey)',
  headerTextColor: 'var(--black)',
  newColumn: 'var(--medium-grey)',
  boardTitleText: 'var(--black)',
  taskBg: 'var(--white)',
  taskHeaderText: 'var(--black)',
  switchBg: 'var(--light-grey)',
  lines: 'var(--light-lines)',
  modalBg: 'var(--white)',
  inputNamesColour: 'var(--medium-grey)',
  modalHeader: 'var(--black)',
  inputColour: 'var(--white)',
  inputTextColour: 'var(--black)',
  boardMenuColor: 'var(--white)',
  deleteModalBG: 'var(--white)'
}
export const darkTheme = {
  bodyColour: 'var(--dark-grey)',
  sidebarColour: 'var(--dark-grey)',
  headerColour: 'var(--dark-grey)',
  mainColour: 'var(--very-dark-grey)',
  headerTextColor: 'var(--white)',
  newColumn: 'var(--dark-grey)',
  boardTitleText: 'var(--white)',
  taskBg: 'var(--dark-grey)',
  taskHeaderText: 'var(--white)',
  switchBg: 'var(--very-dark-grey)',
  lines: 'var(--dark-lines)',
  modalBg: 'var(--dark-grey)',
  inputNamesColour: 'var(--white)',
  modalHeader: 'var(--white)',
  inputColour: 'var(--dark-grey)',
  inputTextColour: 'var(--white)',
  boardMenuColor: 'var(--black)',
  deleteModalBG: 'var(--dark-grey)'
}

export default GlobalStyle
