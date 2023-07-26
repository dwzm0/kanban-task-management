import { styled } from 'styled-components'

export const StyledMain = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: ${props => props.theme.mainColour};
`
export const StyledMainEmpty = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: ${props => props.theme.mainColour};
`
