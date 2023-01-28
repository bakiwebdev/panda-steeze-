/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // hydrate: (state: any, action: any) => {
  //   // do not do state = action.payload it will not update the store
  //   return action.payload;
  // },
  reducers: {
    addToBasket: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload.id);
    },
    plusItem: (state, action) => {
      // [...state.items, (state.items[action.payload].quantity += 1)];
    },
    minusItem: (state, action) => {
      // [...state.items, (state.items[action.payload]?.quantity -= 1)];
    },
    deleteFromBasket: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  plusItem,
  minusItem,
  deleteFromBasket,
} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.basket.items;

export default basketSlice.reducer;
