import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboardReducer'
import currIdReducer from './reducers/currIdReducer'
import isShownSidebarReducer from './reducers/isShownSidebarReducer'

const store = configureStore({
  reducer: {
    dashboards: dashboardReducer,
    currId: currIdReducer,
    isShownSidebar: isShownSidebarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
