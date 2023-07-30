import { styled } from 'styled-components'
import { FlexCol, FlexCenter, FlexRow } from '../../globalStyle'

export const StyledMain = styled.div`
    grid-area: main;
    ${FlexRow}
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.mainColour};
`
export const StyledMainEmpty = styled.div`
    grid-area: main;
    ${FlexCol}
    ${FlexCenter}
    gap: 2rem;
    background-color: ${props => props.theme.mainColour};
`
