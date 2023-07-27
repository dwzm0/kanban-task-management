import { createSlice } from '@reduxjs/toolkit'

const isShownSidebarSlice = createSlice({
  name: 'isShownSidebar',
  initialState: true,
  reducers: {
    setisShownSidebar (state, action) {
      return action.payload
    }
  }
})

export const { setisShownSidebar } = isShownSidebarSlice.actions

export const setIsShownSidebarActionCreator = (status: boolean) => {
  return async (dispatch: any) => {
    dispatch(setisShownSidebar(status))
  }
}

export default isShownSidebarSlice.reducer
