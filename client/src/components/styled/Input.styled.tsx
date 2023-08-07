/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components'
import { FlexCol } from 'src/globalStyle'

export const StyledInput = styled.div`
   ${FlexCol}
   gap: .75rem;
   width: 100%;

   input {
        width: 100%;
        padding: .7rem;
        border-radius: .3rem;
        border: 1px solid ${props => props.theme.lines};
        background-color: ${props => props.theme.inputColour};
        color: ${props => props.theme.inputTextColour};
        text-align: left;

        &:focus {
            outline: none;
        }
   }       
`
