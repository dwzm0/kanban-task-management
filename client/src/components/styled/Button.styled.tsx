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
        background-color: #635FC7;
        color: #ffffff;
        
        &:hover {
           background-color: #A8A4FF;
        }
    }

    &.secondary {
        background-color: '#f4f7fd';
        color: #635FC7;
    }

    &.destructive {
        background-color: #EA5555;
        color: #ffffff;   

        &:hover {
           background-color: #FF9898;
        }
    }

`
export default StyledButton
