import { styled } from 'styled-components'

export const StyledSidebar = styled.div`
    width: 300px;
    height: 100vh;
    padding: 2.125rem;
    background-color: ${props => props.theme.sidebarColour};
    grid-area: sidebar;
    border-right: 1px solid ${props => props.theme.lines};

    &.hideSidebar {
       display: none;
    }
`
