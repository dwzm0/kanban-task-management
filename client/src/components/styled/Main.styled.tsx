import { styled } from 'styled-components'
import { FlexCol, FlexCenter, FlexRow } from '../../globalStyle'

export const StyledMain = styled.div`
    grid-area: main;
    overflow: auto;
    ${FlexRow}
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.mainColour};
`
export const StyledEmpty = styled.div`
    grid-area: main;
    background-color: ${props => props.theme.mainColour};
    ${FlexCol}
    ${FlexCenter}
`

export const StyledEmptyContainer = styled.div`
    grid-area: main;
    ${FlexCol}
    ${FlexCenter}
    gap: 2rem;
    max-width: 493px;
`
