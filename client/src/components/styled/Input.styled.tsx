/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components'
import { FlexCol } from 'src/globalStyle'

export const StyledInput = styled.div<{ redBorder?: boolean }>`
   ${FlexCol}
   gap: .75rem;
   width: 100%;
   position: relative;

   input {
        width: 100%;
        padding: .7rem;
        border-radius: .3rem;
        border: ${({ redBorder, theme }) => redBorder ? '1px solid var(--red)' : `1px solid ${theme.lines}`} ;
        background-color: ${props => props.theme.inputColour};
        color: ${props => props.theme.inputTextColour};
        text-align: left;

        &:focus {
            outline: none;
        }
   }       

   > * {
    &:nth-child(3) {
        color: var(--red);
        position: absolute;
        bottom: 12px;
        right: 15px;
    }
   }

`
