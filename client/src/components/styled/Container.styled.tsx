import { styled } from 'styled-components'

const StyledContainer = styled.div`
    width:100vw;
    height:100vh;
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
    "sidebar header"
    "sidebar main";
`

export default StyledContainer
