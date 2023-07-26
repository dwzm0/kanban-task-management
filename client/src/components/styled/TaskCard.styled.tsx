import styled from 'styled-components'

export const StyledTaskCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    height: fit-content;
    background-color: ${props => props.theme.taskBg};
    padding-block: 1.5rem;
    padding-inline: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 12px 15px -3px rgba(0,0,0,0.1);
    color: ${props => props.theme.taskHeaderText}
`
