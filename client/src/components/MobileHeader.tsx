import React, { useState } from 'react'
import { FlexRowContainer, HeadingM } from 'src/globalStyle'
/* import  ChevronIconUp  from '../components/icons/ChevronIconUp'
 */import ChevronIconDown from '../components/icons/ChevronIconDown'
import { StyledMobileHeader } from './styled/MobileHeader.styled'
import { useAppSelector } from '../hooks/useReduxHooks'
import AddTaskMobileIcon from './icons/AddTaskMobileIcon'
import MobileLogo from './icons/MobileLogo'
import EditMenuIcon from './icons/EditBoardMenuIcon'
import Button from './Button'
import BoardMenuModal from './modals/Board/BoardMenuModal'
import AddTaskModal from './modals/Task/AddTaskModal'

const MobileHeader = (): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)
  const [boardMenu, setBoardMenu] = useState<boolean>(false)
  const [addTaskModal, setAddTaskModal] = useState<boolean>(false)

  const toggleAddTaskModal = () => {
    setAddTaskModal(!addTaskModal)
  }

  const toggleBoardMenu = () => {
    setBoardMenu(!boardMenu)
  }

  return (
    <StyledMobileHeader>

      <FlexRowContainer>
         <MobileLogo />
         <FlexRowContainer>
            <HeadingM>{selectDashboardName}</HeadingM>
            <ChevronIconDown />
         </FlexRowContainer>
      </FlexRowContainer>

      <FlexRowContainer>
        <Button variant="primary" type='button' handleClick={toggleAddTaskModal}>
            <AddTaskMobileIcon />
        </Button>
        <EditMenuIcon handleMenuToggle={toggleBoardMenu}/>
        {boardMenu ? <BoardMenuModal toggleBoardMenu={toggleBoardMenu}/> : null}
      </FlexRowContainer>
      {addTaskModal ? <AddTaskModal toggleAddTaskModal={toggleAddTaskModal}/> : null}

    </StyledMobileHeader>
  )
}

export default MobileHeader
