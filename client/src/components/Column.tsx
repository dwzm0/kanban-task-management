import React from 'react'
import { FlexRow, HeadingS } from '../globalStyle'
import { StyledColumn } from './styled/Column.styled'
import StyledColumnDot from './styled/ColumnDot.styled'
import TaskCard from './TaskCard'
import { type ITask } from '../types/types'

interface ColumnProps {
  key: string
  name: string
  tasks: ITask[] | undefined
  colColour: string
}

const Column = ({ name, tasks, colColour }: ColumnProps): JSX.Element => {
  return (
    <StyledColumn>
        <FlexRow>
            <StyledColumnDot colColour={colColour}/>
            <HeadingS gray>{name.toUpperCase()} ({tasks?.length})</HeadingS>
        </FlexRow>
        {tasks?.map((task) => {
          return <TaskCard key={task._id} task={task} />
        })}
    </StyledColumn>
  )
}

export default Column
