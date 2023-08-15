import styled from 'styled-components'
import { FlexCol } from '../../globalStyle'

export const StyledInputGroupContainer = styled.div`
    ${FlexCol}
    gap: .75rem;
    color: ${props => props.theme.inputNamesColour};

    @media(max-width: 720px) {
       align-items: flex-start;
       width: 100%;
       justify-content: flex-start;
    }
`
