import styled from 'styled-components'
import { FlexCol } from '../../../globalStyle'

export const StyledDeleteModal = styled.div`
    ${FlexCol}
    padding: 2rem;
    gap: 1.7rem;
    background-color: ${props => props.theme.deleteModalBG};
    width: 480px;
    height: fit-content;
    z-index: 999;

    h2 {
        color: var(--red);
    }

    > * {
        &:nth-child(2) {
            color: var(--medium-grey)
        }

        &:nth-child(3) {
            gap: 1rem;

            * {
                width:  100%;
            }
        }
    }
`
