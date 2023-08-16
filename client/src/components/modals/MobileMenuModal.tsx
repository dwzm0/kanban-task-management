import React, { useState } from 'react'
import { StyledSidebarMenuContainer } from '../styled/SidebarMenu.styled'
import { useAppDispatch, useAppSelector } from 'src/hooks/useReduxHooks'
import { TextM, StyledModalContainer } from 'src/globalStyle'
import { setCurrIdActionCreator } from 'src/reducers/currIdReducer'
import SidebarMenuItem from '../styled/SidebarMenuItem'
import Switch from '../Switch'
import { StyledMobileMenu } from '../styled/StyledModals/MobileMenuModal.styled'
import CreateBoardModal from './Board/CreateBoardModal'

interface MobileMenuModalProps {
  toggleMobileMenu: () => void
}

const MobileMenuModal = ({ toggleMobileMenu }: MobileMenuModalProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const [addBoardModal, setAddBoardModal] = useState<boolean>(false)
  const selectDashboards = useAppSelector((state) => state.dashboards)
  const boardCount = selectDashboards.length

  const toggleBoardModal = () => {
    setAddBoardModal(!addBoardModal)
  }

  const toggleCurrBoard = async (boardId: string) => {
    await dispatch(setCurrIdActionCreator(boardId))
  }

  return (
    <>
      <StyledModalContainer onClick={toggleMobileMenu}>
          <StyledMobileMenu onClick={(e) => { e.stopPropagation() }}>
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
          </StyledMobileMenu>
      </StyledModalContainer>
      <CreateBoardModal addBoardModal={addBoardModal} handleClick={toggleBoardModal}/>
    </>
  )
}

export default MobileMenuModal
