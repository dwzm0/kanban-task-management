import React from 'react'
import { StyledHeader } from './styled/Header.styled'
import { HeadingXL } from '../globalStyle'
import Button from './Button'
import { useAppSelector } from '../hooks/useReduxHooks'

const Header = (): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)

  return (
    <StyledHeader>
        <HeadingXL>{selectDashboardName}</HeadingXL>
        <Button variant="destructive" disabled={true} >+ Add New Task</Button>
    </StyledHeader>
  )
}

export default Header
