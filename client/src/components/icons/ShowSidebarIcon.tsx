import React from 'react'
import img from '../../assets/icon-show-sidebar.svg'
import { StyledShowSidebarIcon } from '../styled/StyledIcons/ShowSidebarIcon.styled'
import { setIsShownSidebarActionCreator } from '../../reducers/isShownSidebarReducer'
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'

const ShowSidebarIcon = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  const showSideBar = async () => {
    await dispatch(setIsShownSidebarActionCreator(!selectIsShownSidebar))
  }

  return (
    <StyledShowSidebarIcon onClick={showSideBar}>
        <img src={img} />
    </StyledShowSidebarIcon>
  )
}

export default ShowSidebarIcon
