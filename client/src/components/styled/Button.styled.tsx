import styled from 'styled-components'

const StyledButton = styled.button`
    padding-block: 1rem;
    padding-inline: 1.5rem;
    border-radius: 1.5rem;
    font-weight: bold;
    font-size: 0.8125rem;
    border: none;

    &:hover {
           cursor : pointer;
        }

    &.primary {
        background-color: var(--main-purple);
        color: var(--white);
        
        &:hover {
           background-color: var(--main-purpleHOV);
        }
    }

    &.secondary {
        background-color: var(--light-grey);
        color: var(--main-purple);
    }

    &.destructive {
        background-color: var(--red);
        color: var(--white);   

        &:hover {
           background-color: var(--redHOV);
        }
    }

`
export default StyledButton
