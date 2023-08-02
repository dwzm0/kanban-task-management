/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { StyledSidebarMenu, StyledSidebarMenuItem, StyledSidebarMenuContainer } from './styled/SidebarMenu.styled'
import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks'
import { HeadingM, TextM } from '../globalStyle'
import Switch from './Switch'
import { setCurrIdActionCreator } from '../reducers/currIdReducer'
import { setIsShownSidebarActionCreator } from '../reducers/isShownSidebarReducer'
import CreateBoardModal from './modals/CreateBoardModal'

interface SidebarMenuItemProps {
  id?: string
  text?: string
  close?: boolean
  purple?: string
  handleClick?: (() => Promise<void>) | (() => void)
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ id, text, close, handleClick, purple }): JSX.Element => {
  const [colour, setColour] = useState<string>('#828FA3')
  const selectCurrId = useAppSelector((state) => state.currId)
  const isSelected = selectCurrId === id

  const setIconColour = (purple: string): any => {
    if (purple) {
      setColour(purple)
    } else if (isSelected && !purple) {
      setColour('#ffffff')
    } else {
      setColour('#828FA3')
    }
  }
  useEffect(() => {
    setIconColour(purple as string)
  })

  return (
        <StyledSidebarMenuItem purple={purple} className={isSelected ? 'selected' : ''} onClick={handleClick}>
        {close
          ? <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z" fill="#828FA3"/></svg>
          : <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H1
            3.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.55
            5v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
            fill={colour}/></svg>
          }
            <HeadingM>{text}</HeadingM>
        </StyledSidebarMenuItem>
  )
}

const SidebarMenu = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [addBoardModal, setAddBoardModal] = useState<boolean>(false)
  const selectDashboards = useAppSelector((state) => state.dashboards)
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  const ToggleBoardModal = () => { setAddBoardModal(!addBoardModal) }

  return (
    <>
        <StyledSidebarMenu>
            <StyledSidebarMenuContainer>
                <TextM>ALL BOARDS ({selectDashboards.length})</TextM>
                {selectDashboards.map((board) => {
                  return (
                        <SidebarMenuItem key={board._id} id={board._id} text={board.name}
                        handleClick={async () => { await dispatch(setCurrIdActionCreator(board._id)) }}/>
                  )
                })}
                <SidebarMenuItem handleClick={ToggleBoardModal} purple='#635fc7' text='+ Create New Board'/>
            </StyledSidebarMenuContainer>
            <Switch />
            <SidebarMenuItem close text='Hide Sidebar'
            handleClick={async () => { await dispatch(setIsShownSidebarActionCreator(!selectIsShownSidebar)) }}/>
        </StyledSidebarMenu>
        <CreateBoardModal addBoardModal={addBoardModal} handleClick={ToggleBoardModal}/>
    </>
  )
}

export default SidebarMenu
