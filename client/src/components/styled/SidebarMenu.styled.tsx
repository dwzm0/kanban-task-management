/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { styled } from 'styled-components'
import boardImg from '../../assets/icon-board.svg'
import closeImg from '../../assets/icon-hide-sidebar.svg'

export const StyledSidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 91%;
    color: var(--medium-grey);
`
export const StyledSidebarMenuContainer = styled.div`
    flex: 1;
`

export const StyledSidebarMenuItem = styled.div<{ close?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem;
    padding-block: .9375rem;

    &:hover {
        cursor: pointer;
    }

    img {
        background-image: ${props => props.close ? `url(${closeImg})` : `url(${boardImg})`};
        width: 16px;
        height: 16px;
    }

`
