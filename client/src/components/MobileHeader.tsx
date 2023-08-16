import React, { useState } from 'react'
import { FlexRowContainer, HeadingM } from 'src/globalStyle'
import ChevronIconUp from '../components/icons/ChevronIconUp'
import ChevronIconDown from '../components/icons/ChevronIconDown'
import { StyledMobileHeader } from './styled/MobileHeader.styled'
import { useAppSelector } from '../hooks/useReduxHooks'
import AddTaskMobileIcon from './icons/AddTaskMobileIcon'
import MobileLogo from './icons/MobileLogo'
import EditMenuIcon from './icons/EditBoardMenuIcon'
import Button from './Button'
import BoardMenuModal from './modals/Board/BoardMenuModal'
import AddTaskModal from './modals/Task/AddTaskModal'
import MobileMenuModal from './modals/MobileMenuModal'

const MobileHeader = (): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const selectDashboardName = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.name)
  const [boardMenu, setBoardMenu] = useState<boolean>(false)
  const [addTaskModal, setAddTaskModal] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const toggleAddTaskModal = () => {
    setAddTaskModal(!addTaskModal)
  }

  const toggleBoardMenu = () => {
    setBoardMenu(!boardMenu)
  }

  console.log(mobileMenu)

  return (
    <StyledMobileHeader>

      <FlexRowContainer gap="1rem">
         <MobileLogo />
         <FlexRowContainer gap="1rem" onClick={toggleMobileMenu}>
            <HeadingM> {selectDashboardName}</HeadingM>
            {mobileMenu ? <ChevronIconUp /> : <ChevronIconDown />}
         </FlexRowContainer>
      </FlexRowContainer>

      <FlexRowContainer gap="1rem">
        <Button variant="primary" type='button' handleClick={toggleAddTaskModal}>
            <AddTaskMobileIcon />
        </Button>
        <EditMenuIcon handleMenuToggle={toggleBoardMenu}/>
        {boardMenu ? <BoardMenuModal toggleBoardMenu={toggleBoardMenu}/> : null}
      </FlexRowContainer>
      {addTaskModal ? <AddTaskModal toggleAddTaskModal={toggleAddTaskModal}/> : null}
      {mobileMenu ? <MobileMenuModal toggleMobileMenu={toggleMobileMenu}/> : null}
    </StyledMobileHeader>
  )
}

export default MobileHeader
