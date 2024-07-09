// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slicers
import settingsSlice from "./slicers/slicer/settings";

export const store = configureStore({
  reducer: {
    settings: settingsSlice
  },
})

// Root State Map
export type RootState = ReturnType<typeof store.getState>
