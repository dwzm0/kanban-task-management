import styled from 'styled-components'
import { FlexCol, FlexRow } from '../../globalStyle'

export const StyledFormWrapper = styled.form`
    fieldset {
        border: none;
        ${FlexCol}

    legend {
        width: 100%;
        padding-bottom: 1.5rem;
        color: ${props => props.theme.modalHeader};
        ${FlexRow};
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }
}
`
