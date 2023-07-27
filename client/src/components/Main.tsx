import React from 'react'
import { StyledMain, StyledMainEmpty } from './styled/Main.styled'
import { HeadingL, HeadingM } from '../globalStyle'
import Button from './Button'
import Column from './Column'
import { useAppSelector } from '../hooks/useReduxHooks'
import ShowSidebarIcon from './icons/ShowSidebarIcon'

const Main = (): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectColumns = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.columns)
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  const columnColors = ['#49C4E5', '#8471F2', '#67E2AE', '#FDC7AB', '#B7CBC0']

  if (selectColumns?.length === 0) {
    return (
      <StyledMainEmpty>
        <HeadingL gray>This board is empty. Create a new column to get started.</HeadingL>
        <Button variant='primary'>
          <HeadingM>+ Add New Column</HeadingM>
        </Button>
      </StyledMainEmpty>
    )
  }

  return (
    <StyledMain>
        {selectColumns?.map((column, i) => {
          return <Column key={column._id} name={column.name} tasks={column.tasks} colColour={columnColors[i]}/>
        })}
      {selectIsShownSidebar ? null : <ShowSidebarIcon />}
    </StyledMain>
  )
}

export default Main
