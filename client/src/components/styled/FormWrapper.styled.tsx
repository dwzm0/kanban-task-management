import styled from 'styled-components'

export const StyledFormWrapper = styled.form`
    fieldset {
        border: none;
        display: flex;
        flex-direction: column;

    legend {
        padding-bottom: 1.5rem;
        color: ${props => props.theme.modalHeader};
    }
}
`
