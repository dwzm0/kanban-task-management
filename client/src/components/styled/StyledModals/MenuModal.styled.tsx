import styled from 'styled-components'
import { FlexCol } from '../../../globalStyle'

export const StyledBoardMenu = styled.div`
    ${FlexCol}
    background-color: ${props => props.theme.boardMenuColor};
    color: var(--medium-grey);
    padding-block: 1rem;
    padding-inline: 1rem;
    gap: 1rem;
    position: absolute;
    width: 192px;
    height: min-content;
    top: 90px;
    
    * {
        cursor: pointer;
    }

    > * {
        &:nth-child(2) {
            color: var(--red); 
        }
    } 
`
