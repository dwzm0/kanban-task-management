/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledHeader } from './styled/Header.styled'
import { HeadingXL, HeadingM, FlexRowContainer } from '../globalStyle'
import EditBoardMenuIcon from './icons/EditBoardMenuIcon'
import Button from './Button'
import { useAppSelector } from '../hooks/useReduxHooks'
import BoardMenuModal from './modals/BoardMenuModal'
import AddTaskModal from './modals/AddTaskModal'

const Header = (): JSX.Element => {
  const [boardMenu, setBoardMenu] = useState<boolean>(false)
  const [addTaskModal, setAddTaskModal] = useState<boolean>(false)
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)

  const toggleAddTaskModal = () => {
    setAddTaskModal(!addTaskModal)
  }

  const toggleBoardMenu = () => {
    setBoardMenu(!boardMenu)
  }

  return (
    <>
    <StyledHeader>
        <HeadingXL>{selectDashboardName}</HeadingXL>
        <FlexRowContainer>
            <Button variant="primary" type='button' handleClick={toggleAddTaskModal}>
                <HeadingM>+ Add New Task</HeadingM>
            </Button>
            <EditBoardMenuIcon handleBoardMenu={toggleBoardMenu}/>
            {boardMenu ? <BoardMenuModal toggleBoardMenu={toggleBoardMenu}/> : null}
        </FlexRowContainer>
        {addTaskModal ? <AddTaskModal toggleAddTaskModal={toggleAddTaskModal}/> : null}

    </StyledHeader>
    </>
  )
}

export default Header
