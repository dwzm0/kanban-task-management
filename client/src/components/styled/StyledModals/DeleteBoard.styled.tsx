import styled from 'styled-components'
import { FlexCol } from '../../../globalStyle'

export const StyledDeleteBoard = styled.div`
    ${FlexCol}
    padding: 2rem;
    gap: 2rem;

    > * {
        &:nth-child(3) {
            gap: 1rem;
        }
    }
`
