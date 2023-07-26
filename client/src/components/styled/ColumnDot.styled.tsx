import styled from 'styled-components'

const StyledColumnDot = styled.div<{ colColour?: string }>`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.colColour};
    margin-right: 12px;
`

export default StyledColumnDot
