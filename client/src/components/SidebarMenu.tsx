/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { StyledSidebarMenu, StyledSidebarMenuItem, StyledSidebarMenuContainer } from './styled/SidebarMenu.styled'
import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks'
import { HeadingM, TextM } from '../globalStyle'
import Switch from './Switch'
import { setCurrIdActionCreator } from '../reducers/currIdReducer'

interface SidebarProps {
  text?: string
  close?: boolean
  handleClick?: () => Promise<void>
}

const SidebarMenuItem: React.FC<SidebarProps> = ({ text, close, handleClick }): JSX.Element => {
  return (
      <>
        <StyledSidebarMenuItem close={close} onClick={handleClick}>
            <img/>
            <HeadingM>{text}</HeadingM>
        </StyledSidebarMenuItem>
      </>
  )
}

const SidebarMenu = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectDashboards = useAppSelector((state) => state.dashboards)

  return (
    <>
        <StyledSidebarMenu>
            <StyledSidebarMenuContainer>
                <TextM>ALL BOARDS ({selectDashboards.length})</TextM>
                {selectDashboards.map((board) => {
                  return (
                        <SidebarMenuItem key={board._id} text={board.name} handleClick={async () => { await dispatch(setCurrIdActionCreator(board._id)) }}/>
                  )
                })}
                <SidebarMenuItem text='+ Create New Board'/>
            </StyledSidebarMenuContainer>
            <Switch />
            <SidebarMenuItem close text='Hide Sidebar' />
        </StyledSidebarMenu>
    </>
  )
}

export default SidebarMenu
