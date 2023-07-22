import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboardReducer'

const store = configureStore({
  reducer: {
    dashboards: dashboardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
