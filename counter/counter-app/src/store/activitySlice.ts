import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Activity {
  code: string;
  name: string;
  areaSqKm: number;
  population: number;
  lines: string[];
  countries: number;
  oceans: string[];
  developedCountries: string[];
}

interface ActivityState {
  activities: Activity[];
  loading: boolean;
  error: string | null;
}

const initialState: ActivityState = {
  activities: [],
  loading: false,
  error: null,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    fetchActivityStart(state) {
      state.loading = true;
    },
    fetchActivitySuccess(state, action: PayloadAction<Activity[]>) {
      state.loading = false;
      state.activities = action.payload;
    },
    fetchActivityFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchActivityStart,
  fetchActivitySuccess,
  fetchActivityFailure,
} = activitySlice.actions;
export default activitySlice.reducer;
