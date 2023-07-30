/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components'

const StyledButton = styled.button<{ sm?: boolean }>`
    padding-block: ${props => props.sm ? '0.75rem' : '1rem'} ;
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
