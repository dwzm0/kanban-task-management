import styled from 'styled-components'

export const StyledInput = styled.input`
    width: 100%;
    padding: .7rem;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.lines};
    background-color: ${props => props.theme.inputColour};
    color: ${props => props.theme.inputTextColour};

    &:focus {
        outline: none;
    }
`
