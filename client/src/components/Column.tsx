import React from 'react'
import { FlexRowContainer, HeadingS } from '../globalStyle'
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
        <FlexRowContainer>
            <StyledColumnDot colColour={colColour}/>
            <HeadingS >{name.toUpperCase()} ({tasks?.length})</HeadingS>
        </FlexRowContainer>
        {tasks?.map((task) => {
          return <TaskCard key={task._id} task={task} />
        })}
    </StyledColumn>
  )
}

export default Column
