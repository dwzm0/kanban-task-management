import styled from 'styled-components'
import { FlexCenter } from '../../globalStyle'

export const StyledShowSidebarIcon = styled.div`
    width: 56px;
    height: 48px;
    display: flex;
    ${FlexCenter}
    background-color: var(--main-purple);
    position: sticky;
    top: 870px;
    right: 1670px;
    margin-left: -1.5rem;
    border-radius: 0 2rem 2rem 0;

    &:hover {
        cursor: pointer;
    }
`
