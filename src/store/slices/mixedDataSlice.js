import { createSlice } from "@reduxjs/toolkit";

import { DISHES } from "../../shared/dishes";
import { COMMENTS } from "../../shared/comments";
import { PROMOTIONS } from "../../shared/promotions";
import { LEADERS } from "../../shared/leaders";

const mixedDataSlice = createSlice({
  name: "mixedData",
  initialState: {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export const {} = mixedDataSlice.actions;
export const mixedDataReducer = mixedDataSlice.reducer;