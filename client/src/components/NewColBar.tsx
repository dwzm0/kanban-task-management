import React from 'react'
import { StyledNewColBar } from './styled/NewColBar'
import { HeadingXL } from 'src/globalStyle'
import AddNewColumnModal from './modals/Column/AddNewColumnModal'

interface NewColBarProps {
  toggleColumnModal: () => void
  columnModal: boolean
}

const NewColBar = ({ toggleColumnModal, columnModal }: NewColBarProps): JSX.Element => {
  return (
    <>
        <StyledNewColBar>
            <HeadingXL onClick={toggleColumnModal}>+ New Column</HeadingXL>
        </StyledNewColBar>
        {columnModal ? <AddNewColumnModal toggleColumnModal={toggleColumnModal}/> : null}
    </>
  )
}

export default NewColBar
