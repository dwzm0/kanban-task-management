import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import dashboardService from '../services/dashboards'
import { type IBoard, type IBoardWithoutId } from '../types/types'

const initialState: IBoard[] = []

const dashboardSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    setDashboards (_state, action: PayloadAction<[]>) {
      return action.payload
    },
    appendBoard (state, action) {
      state.push(action.payload)
    }
  }
})

export const { setDashboards, appendBoard } = dashboardSlice.actions

export const initializeDashboards = () => {
  return async (dispatch: any) => {
    const dashboards = await dashboardService.getAll()
    dispatch(setDashboards(dashboards))
  }
}

export const createBoard = (board: IBoardWithoutId) => {
  return async (dispatch: any) => {
    const newBoard = await dashboardService.createBoard(board)
    dispatch(appendBoard(newBoard))
  }
}

export default dashboardSlice.reducer
