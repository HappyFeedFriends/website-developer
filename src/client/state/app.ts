import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isInitial: boolean;
}

const initialState: AppState = {
    isInitial: true
};

export const { reducer: AppReducers, actions: AppActions } = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export default AppReducers;
