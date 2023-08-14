import styled from 'styled-components'
import { FlexCenter } from '../../../globalStyle'

export const StyledShowSidebarIcon = styled.div`
    min-width: 56px;
    height: 48px;
    display: flex;
    ${FlexCenter}
    background-color: var(--main-purple);
    position: fixed;
    bottom: 30px;
    margin-left: -1.5rem;
    border-radius: 0 2rem 2rem 0;

    &:hover {
        cursor: pointer;
    }
`
