import { styled } from 'styled-components'
import { FlexRow } from '../../globalStyle'

export const StyledHeader = styled.div`
    ${FlexRow}
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.5rem;
    width: 100%;
    height: 100px;
    grid-area: header;
    background-color: ${props => props.theme.headerColour};
    border-bottom: 1px solid ${props => props.theme.lines};
    color: ${props => props.theme.headerTextColor};

    > * {
        &:nth-child(2) {
            align-items: center;
            gap: 2rem;
        }
    }
`
