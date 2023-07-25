import { createSlice } from '@reduxjs/toolkit'

const currIdSlice = createSlice({
  name: 'currId',
  initialState: '',
  reducers: {
    setCurrId (state, action) {
      return action.payload
    }
  }
})

export const { setCurrId } = currIdSlice.actions

export const setCurrIdActionCreator = (id: string) => {
  return async (dispatch: any) => {
    dispatch(setCurrId(id))
  }
}

export default currIdSlice.reducer
