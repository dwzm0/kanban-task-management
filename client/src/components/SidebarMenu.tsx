/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react'
import { StyledSidebarMenu, StyledSidebarMenuItem, StyledSidebarMenuContainer } from './styled/SidebarMenu.styled'
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks'
import { initializeDashboards } from '../reducers/dashboardReducer'
import { HeadingM, TextM } from '../globalStyle'
import Switch from './Switch'

interface SidebarProps {
  text?: string
  close?: boolean
}

const SidebarMenuItem: React.FC<SidebarProps> = ({ text, close }): JSX.Element => {
  return (
      <>
        <StyledSidebarMenuItem close={close}>
            <img/>
            <HeadingM>{text}</HeadingM>
        </StyledSidebarMenuItem>
      </>
  )
}

const SidebarMenu = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const initDashboards = useAppSelector((state) => state.dashboards)

  useEffect(() => {
    dispatch(initializeDashboards())
  }, [dispatch])

  console.log(initDashboards)

  return (
    <>
        <StyledSidebarMenu>
            <StyledSidebarMenuContainer>
                <TextM>ALL BOARDS ({initDashboards.length})</TextM>
                {initDashboards.map((board) => {
                  return (
                        <SidebarMenuItem key={board._id} text={board.name}/>
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
