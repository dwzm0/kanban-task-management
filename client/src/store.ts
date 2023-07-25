import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboardReducer'
import currIdReducer from './reducers/currIdReducer'

const store = configureStore({
  reducer: {
    dashboards: dashboardReducer,
    currId: currIdReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
