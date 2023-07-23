/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react'
import { StyledSidebarMenu, StyledSidebarMenuItem, StyledSidebarMenuContainer } from './styled/SidebarMenu.styled'
import { useAppDispatch, useAppSelector } from '../hooks'
import { initializeDashboards } from '../reducers/dashboardReducer'
import { HeadingM, TextM } from '../globalStyle'

interface Props {
  text: string
}

const SidebarMenuItem = ({ text }: Props): JSX.Element => {
  return (
      <>
        <StyledSidebarMenuItem >
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
        </StyledSidebarMenu>
    </>
  )
}

export default SidebarMenu
