import { createSlice } from '@reduxjs/toolkit';

export interface BasketItem extends Product {
  quantity: number;
}

export interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const addItemToCart = (cartItems: BasketItem[], cartItemToAdd: BasketItem) => {
  const existingCartItem = cartItems.find(
    (cartItem: BasketItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: BasketItem) =>
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
  reducers: {
    addToBasket: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload.id);
    },
    plusItem: (state, action) => {
      [...state.items, (state.items[action.payload].quantity += 1)];
    },
    minusItem: (state, action) => {
      [...state.items, (state.items[action.payload].quantity -= 1)];
    },
    deleteFromBasket: (state) => {
      state.items = [];
    },
  },
});

// Action function
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
