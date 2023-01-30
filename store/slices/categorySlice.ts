import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
  value: string;
}

const initialState: CategoryState = {
  value: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// export actions
export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
