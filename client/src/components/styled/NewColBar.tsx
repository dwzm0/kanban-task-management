import styled from 'styled-components'
import { FlexCol, FlexCenter } from 'src/globalStyle'

export const StyledNewColBar = styled.div`
    ${FlexCol}
    ${FlexCenter}
    min-width: 280px;
    color: var(--medium-grey);
    border-radius: .5rem;
    background-color: ${props => props.theme.newColBarBg};

    h1 {
        &:hover {
            cursor: pointer;
            color: var(--main-purple)
        }
    }
`
