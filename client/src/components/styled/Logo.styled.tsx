import { styled } from 'styled-components'
import logoImg from '../../assets/logo-dark.svg'

export const StyledLogo = styled.div`
    width: 153px;
    height: 26px;
    margin-bottom: 3.375rem;

    img {
        background-image: url(${logoImg});
        width: 100%;   
        height: 100%;
    }
`
