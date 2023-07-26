import { styled } from 'styled-components'

export const StyledHeader = styled.div`
    width: 100%;
    height: 100px;
    grid-area: header;
    background-color: ${props => props.theme.headerColour};
    border-bottom: 1px solid ${props => props.theme.lines};
`
