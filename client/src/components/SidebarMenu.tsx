/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react'
import { StyledSidebarMenu, StyledSidebarMenuContainer } from './styled/SidebarMenu.styled'
import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks'
import { TextM } from '../globalStyle'
import Switch from './Switch'
import { setCurrIdActionCreator } from '../reducers/currIdReducer'
import { setIsShownSidebarActionCreator } from '../reducers/isShownSidebarReducer'
import CreateBoardModal from './modals/Board/CreateBoardModal'
import SidebarMenuItem from './styled/SidebarMenuItem'

const SidebarMenu = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [addBoardModal, setAddBoardModal] = useState<boolean>(false)
  const selectDashboards = useAppSelector((state) => state.dashboards)
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)
  const boardCount = selectDashboards.length

  const toggleBoardModal = () => { setAddBoardModal(!addBoardModal) }

  const toggleCurrBoard = async (boardId: string) => {
    await dispatch(setCurrIdActionCreator(boardId))
  }

  const toggleSidebar = async (status: boolean) => {
    await dispatch(setIsShownSidebarActionCreator(!status))
  }

  return (
    <>
        <StyledSidebarMenu>
            <StyledSidebarMenuContainer>
                <TextM>ALL BOARDS ({boardCount})</TextM>
                {selectDashboards.map((board) => {
                  return (
                        <SidebarMenuItem key={board._id} id={board._id} text={board.name}
                        handleClick={async () => { await toggleCurrBoard(board._id) }}/>
                  )
                })}
                <SidebarMenuItem handleClick={toggleBoardModal}
                   purple='#635fc7' text='+ Create New Board'/>
            </StyledSidebarMenuContainer>
            <Switch />
            <SidebarMenuItem close text='Hide Sidebar'
            handleClick={async () => { await toggleSidebar(selectIsShownSidebar) }}/>
        </StyledSidebarMenu>
        <CreateBoardModal addBoardModal={addBoardModal} handleClick={toggleBoardModal}/>
    </>
  )
}

export default SidebarMenu
