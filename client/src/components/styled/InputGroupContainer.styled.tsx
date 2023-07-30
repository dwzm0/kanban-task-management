import styled from 'styled-components'

export const StyledInputGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.inputNamesColour};

    > * {
        &:nth-child(2) {
        margin-bottom: .675rem;
    }
    }
`
