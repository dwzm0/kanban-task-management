import styled from 'styled-components'
import { FlexCol } from 'src/globalStyle'

export const StyledMobileMenu = styled.div`
     ${FlexCol}
     color: var(--medium-grey);
     height: fit-content;
     width: 264px;
     background-color: ${props => props.theme.mobileMenuBg};
     border-radius: 0.5rem;
     padding: 1rem;
     gap: 1rem;      
`
