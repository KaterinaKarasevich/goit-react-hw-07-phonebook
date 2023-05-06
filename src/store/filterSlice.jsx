const { createSlice } = require("@reduxjs/toolkit");

const initialStateFilter = { value: "" };

const filterSlice = createSlice({
    name: "filter",
    initialState: initialStateFilter,
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
    },
})


export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;







