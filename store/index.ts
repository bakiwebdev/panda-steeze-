import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import basketSlice from './slices/basketSlice';
import categorySlice from './slices/categorySlice';
import wishlistSlice from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    basket: basketSlice,
    category: categorySlice,
    wishlist: wishlistSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
