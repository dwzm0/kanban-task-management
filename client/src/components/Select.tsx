/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { StyledSelectContainer, StyledSelect, StyledSelectOption, StyledSelectHeader } from './styled/Select.styled'
import { TextL, TextM } from 'src/globalStyle'
import img from '../assets/icon-chevron-down.svg'

interface SelectProps {
  cols: string[] | undefined
  currStatus: string
  setCurrStatus: React.Dispatch<React.SetStateAction<string>>
}

interface SelectOptionProps {
  col: string
  handelClick: (optionStatus: string) => void
}

interface SelectHeaderProps {
  col: string
  handelClick: (value: React.SetStateAction<boolean>) => void
  select: boolean
}

const SelectOption = ({ col, handelClick }: SelectOptionProps): JSX.Element => {
  return (
    <StyledSelectOption onClick={() => { handelClick(col) }}>
      <TextL>{col}</TextL>
    </StyledSelectOption>
  )
}

const SelectHeader = ({ col, handelClick, select }: SelectHeaderProps): JSX.Element => {
  return (
    <StyledSelectHeader onClick={() => { handelClick(select) }}>
      <TextL>{col}</TextL>
      <img src={img}/>
    </StyledSelectHeader>
  )
}

const Select = ({ cols, currStatus, setCurrStatus }: SelectProps): JSX.Element => {
  const [select, toggleSelect] = useState<boolean>(false)

  const toggleStatus = (optionStatus: string) => {
    setCurrStatus(optionStatus)
    toggleSelect(!select)
  }

  return (
    <StyledSelectContainer>
      <TextM>Current Status</TextM>
      <SelectHeader col={currStatus} select={select} handelClick={() => { toggleSelect(!select) }} />
      {select
        ? <StyledSelect>
          {cols?.map((col, i) => {
            return <SelectOption key={i} col={col} handelClick={toggleStatus}/>
          })}
      </StyledSelect>
        : null
      }
    </StyledSelectContainer>
  )
}

export default Select
