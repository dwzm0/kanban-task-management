/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import img from '../../assets/icon-show-sidebar.svg'
import { StyledShowSidebarIcon } from '../styled/ShowSidebarIcon.styled'
import { setIsShownSidebarActionCreator } from '../../reducers/isShownSidebarReducer'
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks'

const ShowSidebarIcon = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  return (
    <StyledShowSidebarIcon onClick={async () => { await dispatch(setIsShownSidebarActionCreator(!selectIsShownSidebar)) }}>
        <img src={img} />
    </StyledShowSidebarIcon>
  )
}

export default ShowSidebarIcon
