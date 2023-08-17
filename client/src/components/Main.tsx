import React, { useState } from 'react'
import { StyledMain, StyledEmptyContainer, StyledEmpty } from './styled/Main.styled'
import { HeadingL, HeadingM } from '../globalStyle'
import Button from './Button'
import Column from './Column'
import AddNewColumnModal from './modals/Column/AddNewColumnModal'
import { useAppSelector } from '../hooks/useReduxHooks'
import ShowSidebarIcon from './icons/ShowSidebarIcon'
import NewColBar from './NewColBar'

const Main = (): JSX.Element => {
  const [columnModal, setColumnModal] = useState<boolean>(false)
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectColumns = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.columns)
  const selectIsShownSidebar = useAppSelector((state) => state.isShownSidebar)

  const toggleColumnModal = () => {
    setColumnModal(!columnModal)
  }

  const columnColors = ['#49C4E5', '#8471F2',
    '#67E2AE', '#FDC7AB',
    '#B7CBC0']

  if (selectColumns?.length === 0) {
    return (
      <StyledEmpty>
        <StyledEmptyContainer>
          <HeadingL>This board is empty. Create a new column to get started.</HeadingL>
          <Button variant='primary' handleClick={toggleColumnModal}>
            <HeadingM>+ Add New Column</HeadingM>
          </Button>
        </StyledEmptyContainer>
        {columnModal ? <AddNewColumnModal toggleColumnModal={toggleColumnModal}/> : null}
      </StyledEmpty>
    )
  }

  return (
    <StyledMain>
        {selectColumns?.map((column, i) => {
          return <Column key={column._id} name={column.name} tasks={column.tasks} colColour={columnColors[i]}/>
        })}
        <NewColBar toggleColumnModal={toggleColumnModal} columnModal={columnModal}/>
      {selectIsShownSidebar ? null : <ShowSidebarIcon />}
    </StyledMain>
  )
}

export default Main
