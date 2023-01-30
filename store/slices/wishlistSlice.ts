import { createSlice } from '@reduxjs/toolkit';

export interface WishItems {
  wishItems: string[];
}

const initialState: WishItems = {
  wishItems: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const added = state.wishItems.find((item) => item === action.payload);
      if (added) state.wishItems = [...state.wishItems];
      else state.wishItems = [...state.wishItems, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

// action
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectWishItems = (state: any) => state.wishlist.wishItems;

export default wishlistSlice.reducer;
