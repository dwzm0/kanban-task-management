import styled from 'styled-components'
import { FlexCol } from '../../globalStyle'

export const StyledFormWrapper = styled.form`
    fieldset {
        border: none;
        ${FlexCol}

    legend {
        padding-bottom: 1.5rem;
        color: ${props => props.theme.modalHeader};
    }
}
`
