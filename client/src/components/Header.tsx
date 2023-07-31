import React, { useState } from 'react'
import { StyledHeader } from './styled/Header.styled'
import { HeadingXL, HeadingM, FlexRowContainer } from '../globalStyle'
import EditBoardMenuIcon from './icons/EditBoardMenuIcon'
import Button from './Button'
import { useAppSelector } from '../hooks/useReduxHooks'
import BoardMenu from './modals/BoardMenu'

const Header = (): JSX.Element => {
  const [boardMenu, setBoardMenu] = useState<boolean>(false)
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)

  return (
    <>
    <StyledHeader>
        <HeadingXL>{selectDashboardName}</HeadingXL>
        <FlexRowContainer>
            <Button variant="primary" disabled={true}>
                <HeadingM>+ Add New Task</HeadingM>
            </Button>
            <EditBoardMenuIcon handleBoardMenu={() => { setBoardMenu(!boardMenu) }}/>
            {boardMenu ? <BoardMenu /> : null}
        </FlexRowContainer>
    </StyledHeader>
    </>
  )
}

export default Header
