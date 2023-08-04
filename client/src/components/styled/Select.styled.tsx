import { styled } from 'styled-components'
import { FlexCol } from 'src/globalStyle'

export const StyledSelectContainer = styled.div`
    position: relative;
    padding-top: 0.5rem;
`

export const StyledSelect = styled.div`
    position: absolute;
    ${FlexCol}
    width: 416px;
    height: fit-content;
    color: ${props => props.theme.selectText};
    background-color: ${props => props.theme.selectBG};
    border-radius: .5rem;
    outline: none;

    &:hover{
        cursor: pointer;
        border-color: var(--main-purple);
    }
`

export const StyledSelectOption = styled.div`
    padding: .5rem;
    color: var(--medium-grey);
`

export const StyledSelectHeader = styled.div`
    margin-top: .5rem;
    padding: .5rem;
    border: 1px solid ${props => props.theme.lines};
    color: ${props => props.theme.selectText};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        width: 10px;
        height: 5px;
    }

    &:hover{
        cursor: pointer;
        border-color: var(--main-purple);
    }
`
