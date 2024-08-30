// store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../components/sidebar/SidebarSlice'; 

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
