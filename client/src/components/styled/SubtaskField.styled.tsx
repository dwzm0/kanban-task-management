/* eslint-disable @typescript-eslint/no-var-requires */
import { styled } from 'styled-components'
import { FlexRow } from 'src/globalStyle'

export const StyledSubTaskField = styled.div`
    width: 100%;
`
export const StyledSubTaskLabel = styled.label`
    width: 100%;
    ${FlexRow}
    background-color: ${props => props.theme.subTaskFieldBG};
    padding: .7rem;
    align-items: center;
    color: ${props => props.theme.subTaskText}
`
export const StyledCheckMark = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    position:relative;
    padding-right: 1rem;

    &:hover {
        cursor: pointer;
    }

    &:before,
    &:after {
        content:'';
        width: 1rem;
        height: 1rem;
        display:block;
    }
    &:before {
        border: 1px solid var(--medium-grey);
    }
    &:after {
        position:absolute;
        left:1px;
    }
`

export const StyledCheckMarkInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + ${StyledSubTaskLabel}{
        color: var(--medium-grey);
        text-decoration: line-through;

       ${StyledCheckMark} {
          &:after {
            background-color: var(--main-purple);
            background-image: url(${require('../../assets/icon-check.svg').default});
            background-repeat: no-repeat;
            background-position: center;
        }
       } 
    }
`
