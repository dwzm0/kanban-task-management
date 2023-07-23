import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import dashboardService from '../services/dashboards'
import { type IBoard } from '../types/types'

const initialState: IBoard[] = []

const dashboardSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    setDashboards (state, action: PayloadAction<[]>) {
      return action.payload
    }
  }
})

export const { setDashboards } = dashboardSlice.actions

export const initializeDashboards = () => {
  return async (dispatch: any) => {
    const dashboards = await dashboardService.getAll()
    dispatch(setDashboards(dashboards))
  }
}

export default dashboardSlice.reducer
