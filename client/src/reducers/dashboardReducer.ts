/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit'
import dashboardService from '../services/dashboards'
import { type ITask, type IBoard, type IBoardWithoutId } from '../types/types'

const initialState: IBoard[] = []

const dashboardSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    setDashboards (_state, action) {
      return action.payload
    },
    appendBoard (state, action) {
      state.push(action.payload)
    },
    deleteBoard (state, action) {
      const id = action.payload.id
      return state.filter((board) => board._id !== id)
    },
    updateboard (state, action) {
      const id = action.payload._id
      return state.map((board) => {
        if (board._id === id) {
          board = action.payload
        }
        return board
      })
    },
    updateTask (state, action) {
      const boardId = action.payload.boardId
      const columnId = action.payload.columnId
      const task = action.payload.task
      const taskId = task._id

      const board = state.find((board) => board._id === boardId)
      const column = board?.columns?.find((column) => column._id === columnId)
      const taskIndexInArr = column?.tasks?.findIndex((task) => task._id === taskId) as number
      const taskToUpdate = column!.tasks![taskIndexInArr]

      if (task.status !== taskToUpdate.status) {
        column?.tasks?.splice(taskIndexInArr, 1)
        const columnToInsert = board?.columns?.find(column => column.name === task.status)
        columnToInsert?.tasks?.push(task)
      } else {
        column!.tasks![taskIndexInArr] = task
      }

      return board?.columns
    },
    createTask (state, action) {
      const boardId = action.payload.boardId
      const task = action.payload.task

      const board = state.find((board) => board._id === boardId)
      const column = board?.columns?.find((column) => column.name === task.status)
      column?.tasks?.push(task)
      return task
    }
  }
})

export const { setDashboards, appendBoard, deleteBoard, updateboard, updateTask, createTask } = dashboardSlice.actions

export const initializeDashboards = () => {
  return async (dispatch: any) => {
    const dashboards = await dashboardService.getAll()
    dispatch(setDashboards(dashboards as IBoard[]))
  }
}

export const createBoard = (board: IBoardWithoutId) => {
  return async (dispatch: any) => {
    const newBoard = await dashboardService.createBoard(board)
    dispatch(appendBoard(newBoard))
  }
}

export const delBoard = (id: string) => {
  return async (dispatch: any) => {
    await dashboardService.deleteBoard(id)
    dispatch(deleteBoard(id))
  }
}

export const updBoard = (board: IBoard) => {
  return async (dispatch: any) => {
    const newUpdatedBoard = await dashboardService.updateBoard(board)
    dispatch(updateboard(newUpdatedBoard))
  }
}

export const updTask = (boardId: string, columnId: string, task: ITask) => {
  return async (dispatch: any) => {
    const newUpdatedBoard = await dashboardService.updateTask(boardId, columnId, task)
    dispatch(updateboard(newUpdatedBoard))
  }
}

export const crtTask = (boardId: string, task: ITask) => {
  return async (dispatch: any) => {
    const newTask = await dashboardService.createTask(boardId, task)
    dispatch(createTask(newTask))
  }
}

export default dashboardSlice.reducer
