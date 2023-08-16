/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { styled } from 'styled-components'
import { FlexRow, FlexCol } from '../../globalStyle'

export const StyledSidebarMenu = styled.div`
    ${FlexCol}
    height: 91%;
    color: var(--medium-grey);
`
export const StyledSidebarMenuContainer = styled.div`
    flex: 1;
    > * {
        &:nth-child(1) {
        padding-bottom: 1rem;
    }
    }
`

export const StyledSidebarMenuItem = styled.div<{ purple?: string }>`
    ${FlexRow}
    align-items: center;
    gap: .75rem;
    padding-block: .9375rem;
    color: ${props => props.purple ? props.purple : ''};

    &.selected {
        color: var(--white);
        background-color: var(--main-purple);
        border-radius: 0 2rem 2rem 0;
        margin-left: -2.08rem;
    }

    &:hover {
        cursor: pointer;
    }


`
