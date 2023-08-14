import styled from 'styled-components'
import { FlexCol } from '../../globalStyle'

export const StyledInputGroupContainer = styled.div`
    ${FlexCol}
    gap: .75rem;
    color: ${props => props.theme.inputNamesColour};

        > * {
            &:nth-child(2) {
            margin-bottom: .675rem;
        }
        }
`
