import styled from 'styled-components'
import { FlexCol } from 'src/globalStyle'

export const StyledTextArea = styled.div`
   ${FlexCol}
   gap: .75rem;

   textarea {
         resize: none;
         width: 100%;
         outline: none;
         padding: .7rem;
         white-space: pre-line;
         border: 1px solid ${props => props.theme.lines};
         background-color: ${props => props.theme.inputColour};
         color: ${props => props.theme.inputTextColour};
   }
`
