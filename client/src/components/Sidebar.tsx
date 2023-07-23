import React from 'react'
import { StyledSidebar } from './styled/Sidebar.styled'
import Logo from './Logo'
import SidebarMenu from './SidebarMenu'

const Sidebar = (): JSX.Element => {
  return (
    <>
     <StyledSidebar>
        <Logo />
        <SidebarMenu />
     </StyledSidebar>
    </>
  )
}

export default Sidebar
