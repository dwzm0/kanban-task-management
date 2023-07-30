import styled from 'styled-components'
import { FlexCenter, FlexCol } from '../../../globalStyle'

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

export const StyledCreateBoard = styled.div`
    ${FlexCol}
    width: 480px;
    height: min-content;
    padding: 2rem;
    background-color: ${props => props.theme.modalBg};
`
