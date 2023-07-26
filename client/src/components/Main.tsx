import React from 'react'
import { StyledMain, StyledMainEmpty } from './styled/Main.styled'
import { HeadingL, HeadingM } from '../globalStyle'
import Button from './Button'
import Column from './Column'
import { useAppSelector } from '../hooks/useReduxHooks'

const Main = (): JSX.Element => {
  const selectCurrId = useAppSelector((state) => state.currId)
  const selectColumns = useAppSelector((state) => state.dashboards.filter((dashboard) => dashboard._id === selectCurrId)[0]?.columns)

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
        {selectColumns?.map((column) => {
          return <Column key={column._id} name={column.name} tasks={column.tasks} />
        })}
    </StyledMain>
  )
}

export default Main
