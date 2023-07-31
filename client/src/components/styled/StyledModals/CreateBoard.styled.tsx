import styled from 'styled-components'
import { FlexCol } from '../../../globalStyle'

export const StyledCreateBoard = styled.div`
    ${FlexCol}
    width: 480px;
    height: min-content;
    padding: 2rem;
    background-color: ${props => props.theme.modalBg};
`
