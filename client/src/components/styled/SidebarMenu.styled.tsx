import { styled } from 'styled-components'
import boardImg from '../../assets/icon-board.svg'

export const StyledSidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(130, 143, 163);
`
export const StyledSidebarMenuContainer = styled.div`
    flex: 1;
`

export const StyledSidebarMenuItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem;
    padding-block: .9375rem;

    img {
        background-image: url(${boardImg}); 
        width: 16px;
        height: 16px;
    }

`
