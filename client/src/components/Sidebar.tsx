/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { useAppSelector } from '../hooks/useReduxHooks'
import { StyledSidebar } from './styled/Sidebar.styled'
import Logo from './Logo'
import SidebarMenu from './SidebarMenu'

const Sidebar = (): JSX.Element => {
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  return (
    <>
     <StyledSidebar className={selectIsShownSidebar ? '' : 'hideSidebar'}>
        <Logo />
        <SidebarMenu />
     </StyledSidebar>
    </>
  )
}

export default Sidebar
