import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Browser, IDE } from '../constants';

interface UserState {
  selectedIDE: IDE | null;
  selectedBrowser: Browser | null;
}

const initialState: UserState = {
  selectedIDE: null,
  selectedBrowser: null,
};

export const { reducer: UserReducer, actions: UserActions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectIDE: (state, { payload }: PayloadAction<IDE>) => {
      state.selectedIDE = payload;
    },
    selectBrowser: (state, { payload }: PayloadAction<Browser>) => {
        state.selectedBrowser = payload
    }
  },
});

export default UserReducer;
