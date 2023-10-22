import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
    name: "quotes",
    initialState: { quotesArray: [] },
    reducers: {
        addQuote: (state, action) => {
            state.quotesArray.push(action.payload);
            console.log(state.quotesArray);
        },
        removeQuote: (state, action) => {
            state.quotesArray = state.quotesArray.filter((routine) => routine.id !== action.payload);
            console.log(state.quotesArray);
        }
    }
});

export const { addQuote } = quotesSlice.actions;
export const { removeQuote } = quotesSlice.actions;
export const quotesReducer = quotesSlice.reducer;
